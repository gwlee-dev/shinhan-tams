const fs = require("fs");
const path = require("path");
const replace = require("replace-in-file");
const escapeRegExp = require("lodash.escaperegexp");

// the directory in which you're outputting your build
const baseDir = "dist";
// the name for the directory where your static files will be moved to
const staticDir = "static";
// the directory where your built files (css and JavaScript) will be moved  to
const assetsDir = "build";

// if the staticDir directory isn't there, create it
if (!fs.existsSync(path.join(__dirname, baseDir, staticDir))) {
    fs.mkdirSync(path.join(__dirname, baseDir, staticDir));
}

// same for the assetsDir directory
if (!fs.existsSync(path.join(__dirname, baseDir, assetsDir))) {
    fs.mkdirSync(path.join(__dirname, baseDir, assetsDir));
}

// Loop through the baseDir directory
fs.readdir(`./${baseDir}`, (err, files) => {
    if (err) console.error(err);
    // store all files in custom arrays by type
    const html = [];
    const js = [];
    const css = [];
    const maps = [];
    const staticAssets = [];

    files.forEach((file) => {
        // first HTML files
        if (file.match(/.+\.(html)$/)) {
            console.log("html match", file);
            html.push(file);
        } else if (file.match(/.+\.(js)$/)) {
            // then JavaScripts
            js.push(file);
        } else if (file.match(/.+\.(map)$/)) {
            // then CSS
            maps.push(file);
        } else if (file.match(/.+\.(css)$/)) {
            // then sourcemaps
            css.push(file);
        } else if (file.match(/.+\..+$/)) {
            // all other files, exclude current directory and directory one level up
            staticAssets.push(file);
        }
    });
    // check what went where
    console.log(
        "html",
        html,
        "css",
        css,
        "js",
        js,
        "staticAssets",
        staticAssets
    );

    // create an array for all compiled assets
    const assets = css.concat(js).concat(maps);

    // replace all other resources in html
    html.forEach((file) => {
        staticAssets.forEach((name) => {
            const options = {
                files: path.join(baseDir, file),
                from: new RegExp(escapeRegExp(name), "g"),
                to: staticDir + "/" + name,
            };
            try {
                const changedFiles = replace.sync(options);
                console.log("Modified files:", changedFiles.join(", "));
            } catch (error) {
                console.error("Error occurred:", error);
            }
        });
        assets.forEach((name) => {
            const options = {
                files: path.join(baseDir, file),
                from: new RegExp(escapeRegExp(name), "g"),
                to: assetsDir + "/" + name,
            };
            try {
                const changedFiles = replace.sync(options);
                console.log("Modified files:", changedFiles.join(", "));
            } catch (error) {
                console.error("Error occurred:", error);
            }
        });
    });

    // replace map links in js
    js.forEach((file) => {
        maps.forEach((name) => {
            const options = {
                files: path.join(baseDir, file),
                from: name,
                to: "../" + assetsDir + "/" + name,
            };
            try {
                const changedFiles = replace.sync(options);
                console.log("Modified files:", changedFiles.join(", "));
            } catch (error) {
                console.error("Error occurred:", error);
            }
        });
    });

    // replace links in css
    css.forEach((file) => {
        staticAssets.forEach((name) => {
            const options = {
                files: path.join(baseDir, file),
                from: new RegExp(escapeRegExp(name), "g"),
                to: "../" + staticDir + "/" + name,
            };
            try {
                const changedFiles = replace.sync(options);
                console.log("Modified files:", changedFiles.join(", "));
            } catch (error) {
                console.error("Error occurred:", error);
            }
        });
    });

    // move js and css and maps
    assets.forEach((name) => {
        fs.rename(
            path.join(__dirname, baseDir, name),
            path.join(__dirname, baseDir, assetsDir, name),
            function (err) {
                if (err) throw err;
                console.log(`Successfully moved ${name}`);
            }
        );
    });
    // move staticAssets
    staticAssets.forEach((name) => {
        fs.rename(
            path.join(__dirname, baseDir, name),
            path.join(__dirname, baseDir, staticDir, name),
            function (err) {
                if (err) throw err;
                console.log(`Successfully moved ${name}`);
            }
        );
    });
});

import fs from 'fs';
import path from 'path';

import getAllMatches from "pattern-collector";

// const searchString = /^[ \t]*router\.use\b.*\);\s*$/gm;
const searchString = /^[ \t]*router\.use\b.*?;/gm;

const fileNameToPull = "routes.js";

const startFunc = ({ inFilePath }) => {
    try {
        const filePath = path.join(inFilePath, fileNameToPull);

        const fileContent = fs.readFileSync(filePath, 'utf8');

        const matches = getAllMatches({
            fileContent: fileContent, searchString
        });

        return matches;
    } catch (error) {
        console.error("Error running test:", error.message);
    };

    return [];
};

export default startFunc;
import getAllMatches from "pattern-collector";

const searchString = /^[ \t]*router\.use\b.*?;/gm;

const startFunc = ({ fileContent }) => {
    try {
        const matches = getAllMatches({
            fileContent, searchString
        });

        return matches;
    } catch (error) {
        console.error("Error running test:", error.message);
    };

    return [];
};

export default startFunc;
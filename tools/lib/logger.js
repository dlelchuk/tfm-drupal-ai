function printHeader(scriptName) {

    console.log("");
    console.log("========================================");
    console.log(scriptName);
    console.log("========================================");

}

function printSummary(stats) {

    console.log(`Archivos modificados : ${stats.modifiedFiles}`);
    console.log(`Elementos eliminados : ${stats.removedElements}`);

    console.log("");
    console.log("Finalizado correctamente.");
    console.log("========================================");

}

function printCounts(file, counts) {

    console.log(file);

    for (const [name, value] of Object.entries(counts)) {
        console.log(`  ${name}: ${value}`);
    }

    console.log("");

}

module.exports = {
    printHeader,
    printSummary,
    printCounts
};
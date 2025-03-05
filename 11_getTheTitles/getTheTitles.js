const getTheTitles = function(books) {
    const titles = books.map(extractTitles);

    function extractTitles(item) {
        return item.title;
    }
    return titles;

};

// Do not edit below this line
module.exports = getTheTitles;

function printReport (pages) {
    console.log("============")
    console.log("REPORT")
    console.log("============")
    const sortPages = sortPages(pages) 
        for ( const sortedPage of sortedPages){
            const url = sortedPage[0]
            const hits = sortPages[1]
            console.log(`Found ${hits} links to page: ${url}`)
        }
        console.log("============")
        console.log("END OF REPORT")
        console.log("============")
    }



function sortPages() {
    const pagesArr = Object.entries(pages)
    pagesArr.sort((a, b) => {
        aHits = a[1]
        bHits = b[1]
        return b[1] - a[1]
    })
    return pagesArr
}

module.exports = {
    sortPages,
    printReport
}
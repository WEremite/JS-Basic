function truncateString(str, num) {
    let a = str.slice(0, num);
    if (a.length === str.length) {
        console.log(a);
        return a
    } else {
        console.log(a + "...");
        return a + "..."
    }
}
truncateString("A-tisket a-tasket A green and yellow basket", 8);
truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)
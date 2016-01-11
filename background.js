chrome.commands.onCommand.addListener(function(command) {
    // personnal command named in manifest
    if (command == 'forceCloseTab') {
        // get current tab
        chrome.tabs.query({
            currentWindow: true,
            active: true
        }, function(tab) {
            var currentTab = tab[0],
                isPinned = currentTab.pinned;
            // test if current tab is pinned
            // if true then we unpin the tab and close it
            if( isPinned ) {
                chrome.tabs.update(currentTab.id, {pinned: false});
                chrome.tabs.remove(currentTab.id);
            }
        });
    }
});
chrome.tabs.onUpdated.addListener(
    (tabId, changeInfo, tab) => {
        if (tab.url.startsWith("file")) {

            chrome.declarativeNetRequest.updateSessionRules({
                addRules: [
                    {
                        id: 1,
                        action: {type: "block"},
                        condition: {
                            tabIds: [tabId],
                            resourceTypes: [
                                "main_frame",
                                "sub_frame",
                                "stylesheet",
                                "script",
                                "image",
                                "font",
                                "object",
                                "xmlhttprequest",
                                "ping",
                                "csp_report",
                                "media",
                                "websocket",
                                "webtransport",
                                "webbundle",
                                "other"
                            ]
                        }

                    }
                ],
                removeRuleIds: [1]
            })
        }
    }
)
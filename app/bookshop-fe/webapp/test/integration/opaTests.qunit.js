sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'bookshopfe/test/integration/FirstJourney',
		'bookshopfe/test/integration/pages/ViewBooksMain'
    ],
    function(JourneyRunner, opaJourney, ViewBooksMain) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('bookshopfe') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheViewBooksMain: ViewBooksMain
                }
            },
            opaJourney.run
        );
    }
);
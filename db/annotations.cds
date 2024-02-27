using bookshop as bs from './schema';

annotate bs.Books with @(
    UI.LineItem       : [
        {
            $Type: 'UI.DataField',
            Label: 'Title',
            Value: name
        },
        {
            $Type: 'UI.DataField',
            Label: 'Total Copies Sold',
            Value: totalCopies
        },
        {
            $Type: 'UI.DataField',
            Label: 'Author Name',
            Value: author.name
        }
        
    ],
    UI.SelectionFields: [
        name,
        totalCopies,
    
    ]
);

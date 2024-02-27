namespace bookshop;

using {managed} from '@sap/cds/common';
using {cuid} from '@sap/cds/common';

entity Books : cuid, managed {
    name : String;
    author : Association to Authors;
    totalCopies : Integer;
    transactions : Association to many Transactions on transactions.book = $self;

}
entity ViewBooks as select * from Books;
entity Authors : cuid, managed {
    name : String;
    books : Association to many Books on books.author = $self;

}

entity Customers : cuid, managed {
    name : String;
    email : String;
    phonenumber : String;
    premium : Boolean;
    transactions : Association to many Transactions on transactions.customer = $self;

}

entity Transactions : cuid, managed {
    book : Association to Books;
    customer : Association to Customers;
    transactionType : String; // "BUY" or "RENT"
    transactionDate : DateTime;
    returnDate : DateTime;
    payment : Double;
}
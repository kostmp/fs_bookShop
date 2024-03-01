using bookshop from '../db/schema.cds';

service bookshopService {
    entity Books as projection on bookshop.Books;
    entity Authors as projection on bookshop.Authors;
    entity Customers as projection on bookshop.Customers;
    entity Transactions as projection on bookshop.Transactions;


  

    action createBooks (name : String, author_ID : UUID) returns String;
    action updateBooks (ID : UUID, name : String) returns String;
    action readBooks (ID : UUID) returns Books;
    action deleteBooks (ID : UUID);

    action createAuthors (name : String) returns String;
    action updateAuthors (ID : UUID, name : String) returns String;
    action readAuthors (ID : UUID) returns Authors;
    action deleteAuthors (ID : UUID);

    action createCustomers (name : String, email : String, phonenumber : String, premium : Boolean) returns String;
    action updateCustomers (ID : UUID, name : String, email : String, phonenumber : String, premium : Boolean) returns String;
    action readCustomers (ID : UUID) returns Customers;
    action deleteCustomers (ID : UUID);

    action createTransactions (book : UUID, customer : UUID, transactionType : String, transactionDate : DateTime, returnDate : DateTime, payment : Double) returns String;
    action readTransactions (ID : UUID) returns Transactions;
    action deleteTransactions (ID : UUID);
    action updateTransactions (ID : UUID ,book : UUID, customer : UUID, transactionType : String, transactionDate : DateTime, returnDate : DateTime, payment : Double);
    action transactionsPay () returns String;
}

using bookshop from '../db/schema.cds';

service bookshopService {
    entity Books as projection on bookshop.Books;
}

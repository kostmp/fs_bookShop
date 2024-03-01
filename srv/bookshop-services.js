module.exports = (srv) => {
    const { Books, Authors, Customers, Transactions } = srv.entities;
    srv.on('createBooks', async (req) => {
        const { name, author_ID, totalCopies } = req.data;
        const existingBooks = await SELECT.one.from(Books).where({ name });

        if (existingBooks) {
            return req.error(409, `Book with name ${name} already exists`);
        }
        try {
           await INSERT.into(Books).entries([{ name, author_ID, totalCopies }]);
        } catch(error) {
            console.log(error);
        }
        return `Book with name ${name} created successfully`;

    });

    srv.on('readBooks', async (req) => {
        const { ID } = req.data;
        // Fetch the book by ID
        const book = await cds.transaction(req).run(SELECT.from(Books).where({ID}));
        return book;
    });

    srv.on('updateBooks', async (req) => {
        const { ID, name } = req.data;
        // Update logic for books
        await cds.transaction(req).run(UPDATE(Books).set({ name }).where({ ID }));
        return `Book updated with ID: ${ID}`;
    });

    
    srv.on('deleteBooks', async (req) => {
        const { ID } = req.data;
        // Deletion logic for books
        //DELETE.from('Books').where ({ID})
        await cds.transaction(req).run(DELETE.from(Books).where({ID}));
    });

    srv.on('createAuthors', async (req) => {
        const { name } = req.data;
        const existingAuthors = await SELECT.one.from(Authors).where({ name });
        if (existingAuthors) {
            return req.error(409, `Author with name ${name} already exists`);
        }

        await INSERT.into(Authors).entries([{ name }]);
        return `Author with name ${name} created successfully`;
    });

    srv.on('readAuthors', async (req) => {
        const { ID } = req.data;
        // Fetch the author by ID
        const author = await cds.transaction(req).run(SELECT.from(Authors).where({ID}));
        return author;
    });

    srv.on('updateAuthors', async (req) => {
        const { ID, name } = req.data;
        //Checks if is not present
        const exisitngAuthor = await SELECT.one.from(Authors).where({ ID });
        if(!exisitngAuthor) return req.error(409, `Author with ID ${ID} does not exist`);

        // Update logic for authors
        await cds.transaction(req).run(UPDATE(Authors).set({ name }).where({ ID }));
        return `Author updated with ID: ${ID}`;
    });

    srv.on('deleteAuthors', async (req) => {
        const { ID } = req.data;
        // Deletion logic for authors
        await cds.transaction(req).run(DELETE.from(Authors).where({ID}));
    });


    srv.on('createCustomers', async (req) => {
        const {name, email, phonenumber, premium} = req.data;
        const existingCustomers = await SELECT.one.from(Customers).where({ name });

        if (existingCustomers) {
            return req.error(409, `Customer with name ${name} already exists`);
        }
        try {
           await INSERT.into(Customers).entries([{ name, email, phonenumber, premium }]);
        } catch(error) {
            console.log(error);
        }
        return `Customer with name ${name} created successfully`;
    });

    srv.on('readCustomers', async (req) => {
        const { ID } = req.data;
        // Fetch the author by ID
        const customer = await cds.transaction(req).run(SELECT.from(Customers).where({ID}));
        return customer;
    });

    srv.on('updateCustomers', async (req) => {
        const { ID, name, email, phonenumber, premium } = req.data;
        if (!ID) {
          return req.reject(400, 'No ID provided for update operation');
        }
        upd = {};
        if (name != null) {
            upd.name = name;
        }
        if (email != null) {
            upd.email = email;
        }
        if (phonenumber != null) {
            upd.phonenumber = phonenumber;
        }
        if (premium != null) {
            upd.premium = premium;
        }
        try {
          const updateResult = await cds.transaction(req).run([
            UPDATE(Customers)
              .set(upd)
              .where({ ID })
          ]);
    
          if (updateResult === 1) { // Assuming one record is updated
            return 'Customer updated successfully';
          } else {
            return 'Customer not found or no changes made';
          }
        } catch (error) {
          req.reject(500, `Error updating customer: ${error.message}`);
        }
    });

    srv.on('deleteCustomers', async (req) => {
        const { ID } = req.data;
        // Deletion logic for authors
        await cds.transaction(req).run(DELETE.from(Customers).where({ID}));
    });

    srv.on('createTransactions', async (req) => {
        const {book, customer, transactionType, transactionDate,returnDate, payment} = req.data;
        const existingTransaction = await SELECT.one.from(Transactions).where({ book , and : { customer, and : { transactionDate }}});

        if (existingTransaction) {
            return req.error(409, `Transaction with book id ${book} customer id ${customer} and transaction date ${transactionDate} already exists`);
        }
        try {
           await INSERT.into(Transactions).entries([{ book_ID : book, customer_ID : customer, transactionType, transactionDate, returnDate, payment }]);
        } catch(error) {
            console.log(error);
        }
        return `Transaction with book id ${book} customer id ${customer} and transaction date ${transactionDate} created successfully`;
    });

    srv.on('readTransactions', async (req) => {
        const { ID } = req.data;
        // Fetch the author by ID
        const transaction = await cds.transaction(req).run(SELECT.from(Transactions).where({ID}));
        return transaction;
    });

    srv.on('deleteTransactions', async (req) => {
        const { ID } = req.data;
        // Deletion logic for authors
        await cds.transaction(req).run(DELETE.from(Transactions).where({ID}));
    });

    srv.on('updateTransactions', async (req) => {
        const { ID, book, customer, transactionType, transactionDate, returnDate, payment } = req.data;
        if (!ID) {
          return req.reject(400, 'No ID provided for update operation');
        }
        upd = {};
        if (book != null) {
            upd.book_ID = book;
        }
        if (customer != null) {
            upd.customer_ID = customer;
        }
        if (transactionType != null) {
            upd.transactionType = transactionType;
        }
        if (transactionDate != null) {
            upd.transactionDate = transactionDate;
        }
        if (returnDate != null) {
            upd.returnDate = returnDate;
        }
        if (payment != null) {
            upd.payment = payment;
        }
        try {
          const updateResult = await cds.transaction(req).run([
            UPDATE(Transactions)
              .set(upd)
              .where({ ID })
          ]);
    
          if (updateResult === 1) { // Assuming one record is updated
            return 'Customer updated successfully';
          } else {
            return 'Customer not found or no changes made';
          }
        } catch (error) {
          req.reject(500, `Error updating customer: ${error.message}`);
        }
    });

    srv.on('transactionsPay', async (req) => {
        const query = SELECT.from(Transactions).where({ transactionType: 'BUY' });
        const result = await cds.run(query);
        console.log(result);
        return result;
    });
}
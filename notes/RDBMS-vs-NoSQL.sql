start transaction

UPDATE TABLE accounts SET sum = sum - 5000 WHERE account_id = '77777777';

FIRE, FLOOD


INSERT INTO TABLE journal VALUES('Passing 5000 from 777777777 to 9999999');
UPDATE TABLE accounts SET sum = sum + 5000 WHERE account_id = '99999999';
INSERT INTO TABLE journal VALUES('Passing 5000 from 777777777 to 9999999 succeeded');

end transaction


RDBMS                                        | NoSQL 
strict timing
security
                                               Working with huge amounts of data: very fast
                                               Accessibility
Keep data safe - the hard way                  Keep data safe - the easy way  
SQL - enabling work of non programmers
SQL - enabling very complex queries 
transactional                                             


--------------------------------------------------------------------------
Database                                      Database
Table                                         Collection 
Row                                           Document

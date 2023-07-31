import * as SQLite from 'expo-sqlite';

export default function dataservie(){
    const db = SQLite.openDatabase('SylabusTrackerexpo.db');
    return{
        initializeDatabase(){
            /* db.transaction(tx=>{
              tx.executeSql('drop table Sylabus_Tasklist');
              console.log('table droped');
             });  */
             db.transaction(tx =>{
             
             tx.executeSql('CREATE TABLE IF NOT EXISTS Sylabus_Tasklist (id INTEGER PRIMARY KEY AUTOINCREMENT, task_name TEXT,status INTEGER,subject TEXT,created_date DATE)');
             //this.fetchTaskList();
             console.log("table created");
        });
        return true;
        },

       fetchTaskList(){
           //  console.log("in fetch list-------------------------");
            retrivedNames = [];
            db.transaction(tx => {
                tx.executeSql('SELECT * FROM Sylabus_Tasklist', null,
                  (txObj, resultSet) =>  
                    { 
                       console.log("result set length---"+resultSet.rows.length);
                        for (let i = 0; i < resultSet.rows.length; i++) {
                           // console.log("in for loop");
                           //console.log(resultSet.rows.item(i));
                        retrivedNames.push(resultSet.rows.item(i));
                        console.log("retrived names length"+retrivedNames.length);
                        }
                    },
                  (txObj, error) => console.log(error)
                );
              });
          
             console.log("retrived names length------------------"+retrivedNames.length);

              return retrivedNames;
        
        },
       addTaskToList ()  {
            db.transaction(tx => {
              tx.executeSql('INSERT INTO Sylabus_tasklist (task_name,status,subject,created_date) values (?,?,date(\'now\',\'localtime\'))', ['Firsttask',0,'MATH'],
                (txObj, resultSet) => {
                  console.log("record inserted");
                },
                (txObj, error) => console.log(error)
              );
            });
            return true;
          }  
    
    };
}
 
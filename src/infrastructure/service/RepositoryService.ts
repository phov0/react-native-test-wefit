import db from "./Sqlite";
/**
 * INICIALIZAÇÃO DA TABELA
 * - Executa sempre, mas só cria a tabela caso não exista (primeira execução)
 */
db.transaction((tx) => {
  //<<<<<<<<<<<<<<<<<<<<<<<< USE ISSO APENAS DURANTE OS TESTES!!! >>>>>>>>>>>>>>>>>>>>>>>
  //tx.executeSql("DROP TABLE repositories;");
  //<<<<<<<<<<<<<<<<<<<<<<<< USE ISSO APENAS DURANTE OS TESTES!!! >>>>>>>>>>>>>>>>>>>>>>>

  tx.executeSql(
    "CREATE TABLE IF NOT EXISTS repositories (id INTEGER PRIMARY KEY NOT NULL, name TEXT, ownername TEXT, owneravatar TEXT, description TEXT, url TEXT, language TEXT, stars TEXT, favorite INTEGER);"
  );
});

/**
 * CRIAÇÃO DE UM NOVO REGISTRO
 * - Recebe um objeto;
 * - Retorna uma Promise:
 *  - O resultado da Promise é o ID do registro (criado por AUTOINCREMENT)
 *  - Pode retornar erro (reject) caso exista erro no SQL ou nos parâmetros.
 */
const create = (obj:Repository) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      //comando SQL modificável
      tx.executeSql(
        "INSERT INTO repositories (id, name, ownername, owneravatar, description, url, language, stars, favorite) values (?, ?, ?, ?, ?, ?, ?, ?,?);",
        [obj.id, obj.name, obj.ownername, obj.owneravatar, obj.description, obj.url, obj.language, obj.stars, obj.favorite],
        //-----------------------
        (_, { rowsAffected, insertId }) => {
          if (rowsAffected > 0) resolve(insertId);
          else reject("Error inserting obj: " + JSON.stringify(obj)); // insert falhou
        }
      );
    });
  });
};

/**
 * ATUALIZA UM REGISTRO JÁ EXISTENTE
 * - Recebe o ID do registro e um OBJETO com valores atualizados;
 * - Retorna uma Promise:
 *  - O resultado da Promise é a quantidade de registros atualizados;
 *  - Pode retornar erro (reject) caso o ID não exista ou então caso ocorra erro no SQL.
 */
const update = (obj : Repository) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      //comando SQL modificável
      tx.executeSql(
        "UPDATE repositories SET name=?, ownername=?, owneravatar=?,description=?, url=?, language=?, stars=?, favorite=? WHERE id=?;",
        [obj.name, obj.ownername, obj.owneravatar, obj.url, obj.language, obj.stars, obj.favorite, obj.id],
        //-----------------------
        (_, { rowsAffected }) => {
          if (rowsAffected > 0) resolve(rowsAffected);
          else reject("Error updating obj: id=" + obj.id); // nenhum registro alterado
        }
      );
    });
  });
};

/**
 * BUSCA UM REGISTRO POR MEIO DO ID
 * - Recebe o ID do registro;
 * - Retorna uma Promise:
 *  - O resultado da Promise é o objeto (caso exista);
 *  - Pode retornar erro (reject) caso o ID não exista ou então caso ocorra erro no SQL.
 */
const find = (id:string) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      //comando SQL modificável
      tx.executeSql(
        "SELECT * FROM repositories WHERE id=?;",
        [id],
        //-----------------------
        (_, { rows }) => {
          if (rows.length > 0) resolve(rows._array[0]);
          else reject("Obj not found: id=" + id); // nenhum registro encontrado
        }
      );
    });
  });
};

/**
 * BUSCA TODOS OS REGISTROS DE UMA DETERMINADA TABELA
 * - Não recebe parâmetros;
 * - Retorna uma Promise:
 *  - O resultado da Promise é uma lista (Array) de objetos;
 *  - Pode retornar erro (reject) caso o ID não exista ou então caso ocorra erro no SQL;
 *  - Pode retornar um array vazio caso não existam registros.
 */
const all = () => {
  return new Promise<Repository[]>((resolve, reject) => {
    db.transaction((tx) => {
      //comando SQL modificável
      tx.executeSql(
        "SELECT * FROM repositories;",
        [],
        //-----------------------
        (_, { rows }) => {
          resolve(rows._array)
        }
      );
    });
  });
};

/**
 * REMOVE UM REGISTRO POR MEIO DO ID
 * - Recebe o ID do registro;
 * - Retorna uma Promise:
 *  - O resultado da Promise a quantidade de registros removidos (zero indica que nada foi removido);
 *  - Pode retornar erro (reject) caso o ID não exista ou então caso ocorra erro no SQL.
 */
const remove = (id:number) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      //comando SQL modificável
      tx.executeSql(
        "DELETE FROM repositories WHERE id=?;",
        [id],
        //-----------------------
        (_, { rowsAffected }) => {
          resolve(rowsAffected);
        },
        (_, error) => {
          reject(error);
          return false
        } // erro interno em tx.executeSql
      );
    });
  });
};

export default {
  create,
  update,
  find,
  all,
  remove,
};
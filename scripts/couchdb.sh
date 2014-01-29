# Please make sure that you use correct hosts
curl -X PUT http://127.0.0.1:5984/users
curl -X PUT http://127.0.0.1:5984/users/_design/info/ -d '{"language":"javascript","views":{"full":{"map":"function(doc) {\n  if(doc.fullName && doc.email && doc.updated) {\n    var user = {\n\t_rev: doc._rev,\n        fullName: doc.fullName, \n        email:doc.email, \n        updated:doc.updated\n    };\n    emit(doc.fullName, doc);\n  }\n}"}}}'
curl -X PUT http://localhost:3000/generate-users
(function() {
  'use strict'

  function ConstruNameLast( name, lastName) {
    this.name = name
    this.lastName = lastName
  }

  ConstruNameLast.prototype.fullName = function() {
    return this.name + ' ' + this.lastName
  }

  // ConstruNameLast.idade = function() {
  //   return fullname + ' ' + this.idade
  // }
  ConstruNameLast.prototype.idade = 51

  var pessoa1 = new ConstruNameLast('Anderson ', 'Pereira', 41)
  var pessoa2 = new ConstruNameLast('Andrew', 'Henrique', 11)

  console.log(pessoa1)
  console.log(pessoa2, ' ' + pessoa2.idade)

})()

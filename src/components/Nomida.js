function Nomida(){
    var nombre = document.getElementById('name').value;
    var ide = document.getElementById('ide').value;
    var salarioMensual = parseInt(document.getElementById('sm').value);
    var diasTrabajo = Number(document.getElementById('dt').value);
    var salarioProp = parseInt((salarioMensual/30)*diasTrabajo);
    var auxilioTransporte=parseInt((110000/30)*diasTrabajo);
    var devengado = salarioProp + auxilioTransporte;
    var nm = document.getElementById('nm');
    nm.innerHTML = '<span>'+nombre+'</span> con la identificación de '+'<span>'+ide+'</span>';
    var sp = document.getElementById('sp');
    sp.innerHTML = 'Salario proporcional: <span>$'+salarioProp+'</span>';
    var at = document.getElementById('at');
    at.innerHTML = 'Auxilio Transporte: <span>$'+auxilioTransporte+'</span>';
    var td = document.getElementById('td');
    td.innerHTML = 'Total devengado: <span>$'+devengado+'</span>';
  
    var total = document.getElementById('total');
    total.innerHTML = 'Total nómida:'+' '+devengado+ ' COP ';
    total.style.display = 'block';
  }
  
  export default Nomida
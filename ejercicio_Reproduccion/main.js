class Cl_cliente{
    constructor(codigo, tCopia, cantCop){
        this.codigo= codigo
        this.tCopia= tCopia
        this.cantCop= cantCop
    }

    pagoCop(){
        if(this.tCopia===1)
        return 2* this.cantCop
        else if (this.tCopia=== 2)
        return 3* this.cantCop
        else
        return 0
    }

}

class Cl_Empresa{
    constructor(cO,cC){
        this.acTotCobrado=0
        this.acTipo1=0
        this.acTipo2=0
        this.acpagoCart=0
        this.acpagoOf=0
        this.cantDiaC=cO
        this.cantDiaO=cC

    }

    procesarCliente(c){
        this.acTotCobrado+= c.pagoCop()
        if(c.tCopia===1)
        this.acTipo1+= c.cantCop
        else
        this.acTipo2+= c.cantCop
         if(c.tCopia===1)
       this.acpagoCart+= c.pagoCop()
       else
       this.acpagoOf+= c.pagoCop()
        
        
        


    }

    totalDia(){
        return this.acTotCobrado
    }
    cntTotalDiaCarta(){
        return this.acTipo1 + this.cantDiaC
    }

    cntTotalDiaOfic(){
        return   this.acTipo2 + this.cantDiaO
    }

    mayorPago(){
        if(this.acpagoCart= this.acpagoOf)
        return "Ambas por igual"
        else if(this.acpagoCart> this.acpagoOf)
        return "Carta"
        else
        return "Oficio"
    }
}


let cliente1= new Cl_cliente("111", 1, 4)
let cliente2= new Cl_cliente("222", 2, 5)
let cliente3= new Cl_cliente("333", 2, 20)
let cliente4= new Cl_cliente("444", 1, 8)
let cliente5= new Cl_cliente("555", 1, 9)
let cliente6= new Cl_cliente("666", 1, 20)

let empresa= new Cl_Empresa(50,100)

empresa.procesarCliente(cliente1)
empresa.procesarCliente(cliente2)
empresa.procesarCliente(cliente3)
empresa.procesarCliente(cliente4)
empresa.procesarCliente(cliente5)
empresa.procesarCliente(cliente6)

let salida= document.getElementById("resultados")

salida.innerHTML +=`<p> Codigo ${cliente1.codigo}, Tipo de copia: ${cliente1.tCopia}, Cantidad copias: ${cliente1.cantCop}, Paga: $${cliente1.pagoCop()}</p>`
salida.innerHTML +=`<p> Codigo ${cliente2.codigo}, Tipo de copia: ${cliente2.tCopia}, Cantidad copias: ${cliente2.cantCop}, Paga: $${cliente2.pagoCop()}</p>`
salida.innerHTML +=`<p> Codigo ${cliente3.codigo}, Tipo de copia: ${cliente3.tCopia}, Cantidad copias: ${cliente3.cantCop}, Paga: $${cliente3.pagoCop()}</p>`
salida.innerHTML +=`<p> Codigo ${cliente4.codigo}, Tipo de copia: ${cliente4.tCopia}, Cantidad copias: ${cliente4.cantCop}, Paga: $${cliente4.pagoCop()}</p>`
salida.innerHTML +=`<p> Codigo ${cliente5.codigo}, Tipo de copia: ${cliente5.tCopia}, Cantidad copias: ${cliente5.cantCop}, Paga: $${cliente5.pagoCop()}</p>`
salida.innerHTML +=`<p> Codigo ${cliente6.codigo}, Tipo de copia: ${cliente6.tCopia}, Cantidad copias: ${cliente6.cantCop}, Paga: $${cliente6.pagoCop()}</p>`
salida.innerHTML += `<p> Total recaudado= ${empresa.totalDia()}</p>`
salida.innerHTML += `<p> Fotocopias tipo carta= ${empresa.cntTotalDiaCarta()}, fotocopias tipo oficio: ${empresa.cntTotalDiaOfic()}</p>`

salida.innerHTML += `<p> Mayor pago= ${empresa.mayorPago()}, con un total de: ${empresa.acpagoCart}</p>`
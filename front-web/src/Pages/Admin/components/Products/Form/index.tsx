import { makeRequest } from 'core/utils/requests';
import React, { useState } from 'react';
import BaseForm from '../../BaseForm';

type FormEvent= React.ChangeEvent<HTMLInputElement  | HTMLSelectElement | HTMLTextAreaElement>;
type FormState = {
    name:string;
    price:string;
    category:string;
    description:string;
}
const Form = () =>{

    const [formData,setFormData] = useState<FormState>({name:'', price:'', category:'',description:''});
   
    const handleOnChange=(
        event:FormEvent) =>{
        const name = event.target.name;
        const value = event.target.value;

        console.log({name, value})
        setFormData(data =>({...data,[name]:value }));
    }



    const handleSubmit=(event:React.FormEvent<HTMLFormElement >) =>{
        event.preventDefault();
        const payload=  {
            ...formData,
            imgUrl:'https://th.bing.com/th/id/OIP.ffc9A_ZPTJPNtDUJTmdJOAHaEs?w=282&h=180&c=7&o=5&pid=1.7',
            categories:[{id:formData.category}]
        }
        makeRequest({url:'/products',method:'POST',data:payload});
    }

    return (
        <form onSubmit={handleSubmit}>
        <BaseForm title="cadastrar um produto">
           
            <div className="row">
                <div className="col-6">
                <input 
                    value={formData.name}
                    name="name"
                    type="text" 
                    className="form-control mb-5"
                    onChange={handleOnChange}
                    placeholder="Nome do Produto"
                />
                <select value={formData.category} 
                    name="category"
                    className="form-control mb-5" 
                    onChange={handleOnChange}>
                    <option value="1"> Livros</option>
                    <option value="2"> Eletronicos</option>
                    <option value="3"> Computadores</option>
                </select>
                 <input 
                     value={formData.price}
                    name="price"  
                    type="text" 
                    className="form-control"
                    onChange={handleOnChange}
                    placeholder="Preço"
                />
                        
                </div>
                <div className="col-6">
                    <textarea
                    value={formData.description}
                    className="form-control"
                    onChange={handleOnChange}
                    name="description"  
                    cols={30} 
                    rows={10}/>
                </div>
            </div>
         </BaseForm>
        </form>
    )
}

export default Form;
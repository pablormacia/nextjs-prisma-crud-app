"use client"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
const NewPage = ({ params }) => {
    const router = useRouter()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [buttonTitle,setButtonTitle] = useState('Crear')

    useEffect(() => {
        if(params.id){
            setButtonTitle("Editar")
            fetch(`/api/tasks/${params.id}`)
            .then((res) => res.json())
            .then((data) => {
                setTitle(data.title)
                setDescription(data.description)
            })
        }
        
    }, [])

    const onSubmit = async (e) => {
        e.preventDefault()
        /* const title = e. target.title.value
        const description = e.target.description.value */

        

        if (params.id) {
            //Editando...
            const res = await fetch(`/api/tasks/${params.id}`, {
                method: 'PUT',
                body: JSON.stringify({ title, description }),
                header: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await res.json()
        } else {
            //Creando...
            const res = await fetch('/api/tasks', {
                method: 'POST',
                body: JSON.stringify({ title, description }),
                header: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await res.json()
        }

        //console.log(data)
        router.refresh()
        router.push('/')
    }

    return (
        <div className="h-screen flex justify-center item-center">
            <form className="bg-slate-700 p-10" onSubmit={onSubmit}>
                <label htmlFor="title" className="text-sm">Título de la tarea</label>
                <input id="title" type="text" className="border border-gray-400 p-2 mb-4 w-full text-black" placeholder="Título" onChange={(e) => setTitle(e.target.value)} value={title} />
                <label className="text-sm" htmlFor="description">Descripción de la tarea</label>
                <textarea className="border border-gray-400 p-2 mb-4 w-full text-black" name="" id="description" cols="30" rows="4" placeholder="Descripción" onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >{buttonTitle}</button>
                {
                    params.id && (
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" type="button" onClick={async ()=>{await fetch(`/api/tasks/${params.id}`,{
                            method: 'DELETE'
                        })
                        router.refresh()
                        router.push('/')
                        }}>Eliminar</button>
                    )
                }
            </form>
        </div>
    );
}

export default NewPage;
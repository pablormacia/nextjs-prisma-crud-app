import { prisma } from "@/libs/prisma"
import TaskCard from "@/components/TaskCard"

async function loadTasks(){
    //Puedo hacer una petición HTTP a api/tasks
    /* const res = await fetch('http://localhost:3000/api/tasks')  *///Como es componente de servidor, debo tipear la ruta completa. Este código va antes del navegador
    /* const data = await res.json()
    console.log(data) */

    //o directamente con prisma
    return await prisma.task.findMany()
    //console.log(tasks)
}

const HomePage = async () => {
    const tasks = await loadTasks()
    //console.log(tasks)
    return (
        <section className="container mx-auto">
        <div className="grid grid-cols-3 gap-3 mt-10">
            {
                tasks.map(task=>(
                    <TaskCard task={task} key={task.id} />
                ))
            }
        </div>
        </section>
    );
}

export default HomePage;
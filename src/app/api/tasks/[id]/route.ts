import tasks from '@/data/tasks.json';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    const { id } = await params 
    const task = tasks.find((task) => task.id === parseInt(id));
    
    return Response.json(JSON.stringify(task))
}
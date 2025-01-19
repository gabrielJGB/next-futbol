import tasks from '@/data/tasks.json';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {


    return Response.json(JSON.stringify(tasks))
}
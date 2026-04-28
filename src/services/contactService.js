export async function sendContact(data) {
    const res= await fetch('/api/contact',{
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    if (!res.ok) {
        throw new Error('Failed to send contact');
    }
    return res.json();
}
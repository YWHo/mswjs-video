import Image from "next/image";

export default async function Home() {
  const res = await fetch("https://api.github.com/users/eddiejaoude");
  const data = await res.json();
  console.log("data:\n", data);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">{data.name}</h1>
      <Image className="w-64 h-64 rounded-full shadow-lg"
       src={data.avatar_url} alt={data.name} width={300} height={300} />
    </div>
  );
}

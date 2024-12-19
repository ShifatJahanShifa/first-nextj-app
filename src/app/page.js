import Image from "next/image";
import FirstBox from "@/components/FirstPage/FirstBox";
import SecondBox from "@/components/FirstPage/SecondBox";
import Post from "@/components/FirstPage/Post";

export default function Home() {
  
  const data=[
    {
    id: 1,
    text: "kisu ekta ashse",
    details: "lorem ipsum 1"
    },
    {
      id: 2,
      text: "kisu ekta ashsee",
      details: "lorem ipsum 2"
    },
    {
      id: 3,
      text: "kisu ekta ashseee",
      details: "lorem ipsum 3"
    },
    {
      id: 4,
      text: "kisu ekta ashseeee",
      details: "lorem ipsum 4"
    }
  ]
  
  return (
    <div>
      <div>
      {/* <FirstBox />
      <SecondBox /> */}
      {
        data.map((data)=>(

        <div className="text-5xl p-3 text-center" key={ data.id }>
          
          <Post data={data} /> 
        </div>
        ))
      }
      <a href="/about">Go to about</a>
    </div>
    <div>
      {/* <FirstBox />
      <SecondBox /> */}
      {
        data.map((data)=>(

        <div className="text-5xl p-3 text-center" key={ data.id }>
          
          <Post data={data} /> 
        </div>
        ))
      }
      <a href="/about/">Go to about</a>
    </div>
    </div>
    
  );
}

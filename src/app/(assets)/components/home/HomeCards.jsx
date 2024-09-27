import React from 'react';
import Link from "next/link";; // Assuming you're using React Router
import "../../styles/Gtraining.css";
import "../../styles/Home.css";
import Image from 'next/image';

function HomeCard({ data }) {
    return (
        <div className="custom-container px-3 px-lg-5 px-md-5">
            <div className="my-box-shedow">
                <div className="row justify-content-center align-items-start p-2 pb-3 mt-5">
                    {data.map(session => (
                        <div key={session.id} className="col-md-12 col-12 col-sm-12 col-lg-6 coaching-session p-2 pb-5 pb-lg-2 pb-md-2 text-center">
                            <Image style={{width: '95%', maxWidth:'400px', height: 'auto'}}
                            src={JSON.parse(JSON.stringify(session.imageSrc))} alt={session.title} />
                            <h3>{session.title}</h3>
                            <h4>{session.tagline}</h4>
                            <p className='p-2'>{session.description}</p>
                            <Link href={session.actionLink} target='-blank' className='coaching-session-btn'>TAKE ACTION</Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HomeCard;

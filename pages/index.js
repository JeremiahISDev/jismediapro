import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import DArrow from '../components/DArrow'
export default function Home() {
	return (
		<>
			<Head>
				<title>Home | JIS Media Pro</title>
			</Head>

			<div className="text-center text-6xl md:text-[10rem] font-bold bg-black text-blue-500 p-8 h-screen">
				Introducing JIS Media Pro
			</div>

			<div className="text-center text-2xl font-bold bg-blue-500 text-white p-8 h-fit">
				Our Story
		</div>
			<p className="text-md text-center font-bold bg-blue-500 text-white p-8 h-fit">
				I am a young and talented entrepreneur and engineer with a groundbreaking idea that I hope will contribute towards a better tomorrow. I provide smart solutions for companies of all sizes as well as individuals and provide dedicated, customized service.
<br /><br /><br />
				At JIS Media Pro, I believe that the right understanding and technological edge can lead companies towards a successful future. I always seek valuable feedback from our customers in order to learn and evolve. Contact me today to order your desired form of media.
		</p>
			<div className="grid grd-cols-2 bg-blue-500">
				<Link href="tel:7327886322">
					<button className="text-lg text-center font-bold bg-blue-700 m-2 rounded-2xl text-white p-8 h-fit">
						Text Me
		</button>
				</Link>
				<Link href="mailto:jeremiahsamue@marlboro.k12.nj.us"><button className="text-lg text-center font-bold bg-blue-700 m-2 rounded-2xl text-white p-8 h-fit">
					Email Me
		</button>
				</Link>

				<div className="text-center text-2xl font-bold bg-white text-blue-800 p-8 h-fit">
					What I Do
		</div>
				<p className="text-md text-center font-bold bg-white text-black p-8 h-fit">
					At JIS Media Pro, I believe that our solutions will soon become one of the biggest segments in the industry. We’ve only just started, but we already know that every product we build requires hard-earned skills and dedication.
		</p>
				<div className="grid grid-cols-1 bg-white">
					<Link href="/Order">
						<button className="text-lg text-center font-bold bg-blue-700 m-2 rounded-2xl text-white p-8 h-fit">
							Order Today!
		</button>
					</Link>
				</div>
			</div>
		</>
	)
}

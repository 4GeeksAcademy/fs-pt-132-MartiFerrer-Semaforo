import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {

	const [select, setSelect] = useState("")

	const [Word, setWord] = useState("")


	return (

		<div className="d-flex justify-content-center mt-5 pt-5">

			<div className=""></div>
			<div className="cuerpo">
				<div className="cuerpo1">

					<div>
						<div onClick={() => setSelect("rojo")}
							className={`luz rojo ${select == "rojo" ? "" : "luz-apagada"}`}>
							{select == "rojo" && <p className="rojoWord">!!!Stop!!!</p>}
						</div>

						<div onClick={() => setSelect("amarillo")}
							className={`luz amarillo ${select == "amarillo" ? "" : "luz-apagada"}`}>
							{select == "amarillo" && <p className="amarilloWord">Acelere!</p>}
						</div>

						<div onClick={() => setSelect("verde")}
							className={`luz verde ${select == "verde" ? "" : "luz-apagada"}`}>
							{select == "verde" && <p className="verdeWord ps-5">Adelante!</p>}
						</div>
					</div>

				</div>

			</div>

		</div>
	);
};

export default Home;
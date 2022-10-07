export interface CardInfo{
	id: number;
	title: string;
	cutSize: string[];
}

const cutSizeData:CardInfo[] = [
	{
		id: 0,
		title: "주민등록증/여권/운전면허증/수능원서/공무원원서용",
		cutSize: ["컷 사이즈 3.5cm x 4.5cm"]
	},
	{
		id: 1,
		title: "반명함/학생증/일부 자격증 및 이력서용",
		cutSize: ["컷 사이즈 3cm x 4cm"]
	},
	{
		id: 2,
		title: "사원증/일부 지원서/포트폴리오용",
		cutSize: ["컷 사이즈 5cm x 7cm"]
	},
	{
		id: 3,
		title: "미국.중국.일본 비자(VISA)용",
		cutSize: [
			"미국비자 컷 사이즈 5.1cm x 5.1cm",
			"중국비자 컷 사이즈 3.3cm x 4.8cm",
			"일본비자 컷 사이즈 4.5cm x 4.5cm",
		]
	},
]
export { cutSizeData };
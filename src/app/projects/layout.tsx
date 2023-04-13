export const metadata = {
	title: {
		default: 'Проекти',
		template: '%s | ТУЕС Фест 2023',
	},
	description:
		'Тук може да откриете проектите на учениците на ТУЕС. Тази година над 120 проекта ще бъдат представени само на 23 април в София Тех Парк - форум Джон Атанасов.',
	keywords: [
		'туес',
		'туес фест',
		'туес фест 2023',
		'туесфест',
		'туесфест 2023',
		'туесфест.bg',
		'проекти',
		'ученически проекти',
		'ученици',
		'ученически',
		'инициативи',
		'инициатива',
		'иновации',
		'иновативни',
		'училища',
		'училища софия',
		'училища българия',
		'програмиране',
		'програмиране за деца',
		'програмиране за ученици',
	],
};

const ProjectsLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="min-h-screen">
			{children}
		</div>
	);
};

export default ProjectsLayout;

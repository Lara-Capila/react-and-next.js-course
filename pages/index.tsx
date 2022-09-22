import type { NextPage } from 'next';
import styled from 'styled-components';

const Heading = styled.h1`
	background-color: ${({ theme }) => theme.colors.primary};
`;

const Home: NextPage = () => {
	return <Heading>Olá!</Heading>;
};

export default Home;

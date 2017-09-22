import { createElement as elemento } from 'react'
import { render } from 'react-dom'

//Itens do menu
const itensMenu = ['Inicio', 'Sobre', 'Contato', 'Dicas']
const cabecalho = elemento('header', {
		id: 'cabeca',
		style: {	
			backgroundColor: 'white'
		}
	},[ 
		elemento('h1', { 
				key: '0',
				id: 'titulo',
				style: {
					color: 'red'	
				}
			}, 'Ana Cabeleireira'
		),
		elemento('div', {
				key: '1',
				style: {
					borderRadius: '10px',
					backgroundColor: 'pink',
					border: '2px solid black',
					height: '30px',
				}
			}, 'Portfolio'
		),
		elemento('nav', { key: '2' },
			elemento('ul', {
					style: {
						display: 'flex',
						justifyContent: 'space-between',
						listStyle: 'none'
					}
			}, itensMenu
				.map(item =>
					elemento('li', {
					key: item.slice(0,2) 
							}, elemento('a', {
									href: '#'
								}, item
								
							)
						)
					) 
			)
		)
		
	]	
)

const rootEl = document.getElementById('root')
render(cabecalho, rootEl)

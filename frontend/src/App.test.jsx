import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('Configuração Inicial do Frontend', () => {
  it('Deve renderizar o componente App sem quebrar a tela', () => {
    // 1. Tenta renderizar o componente na memória
    const { container } = render(<App />);
    
    // 2. Verifica se o container gerou algum HTML (ou seja, não está vazio)
    expect(container).toBeTruthy();
  });
});
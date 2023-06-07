import React, { useState } from "react";

function AddressForm() {
  const [cep, setCep] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [complement, setComplement] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [loading, setLoading] = useState(false);

  const handleBlur = async () => {
    if (cep.length === 8) {
      setLoading(true); // Ativar o estado de carregamento

      try {
        const response = await fetch(`http://viacep.com.br/ws/${cep}/json/`);
        const data = await response.json();
        setStreet(data.logradouro || '');
        setNeighborhood(data.bairro || '');
        setCity(data.localidade || '');
        setState(data.uf || '');
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false); // Desativar o estado de carregamento
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Restante do código de submissão do formulário
  };


  return (
    <form onSubmit={handleSubmit}>
      <label>
        CEP:
        <input type="text" value={cep} onChange={(e) => setCep(e.target.value)}          onBlur={handleBlur}
 />
      </label>
      <br />
      <label>
        Nome da rua:
        <input type="text" value={street} onChange={(e) => setStreet(e.target.value)} />
      </label>
      <br />
      <label>
        Número:
        <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
      </label>
      <br />
      <label>
        Complemento:
        <input type="text" value={complement} onChange={(e) => setComplement(e.target.value)} />
      </label>
      <br />
      <label>
        Bairro:
        <input type="text" value={neighborhood} onChange={(e) => setNeighborhood(e.target.value)} />
      </label>
      <br />
      <label>
        Cidade:
        <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
      </label>
      <br />
      <label>
        Estado:
        <input type="text" value={state} onChange={(e) => setState(e.target.value)} />
      </label>
      <br />
      <button type="submit" disabled={loading}>
        {loading ? "Carregando..." : "Enviar"}
      </button>
    </form>
  );
}

export default AddressForm;

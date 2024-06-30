import { useState, useEffect } from 'react';
import { useSendTransaction } from 'wagmi';
import { styled } from 'styled-components';

const StyledInput = styled.input`
background: none;
outline: none;
border-bottom: 2px solid transparent;
border-bottom-color: yellow;
caret-color: yellow;
width: 100%;
`;

const InputBox = () => {
  const [addressValue, setAddressValue] = useState('');
  const [amountValue, setAmountValue] = useState('');

  /* Best practice as mentioned here: https://stackoverflow.com/questions/40676343/typescript-input-onchange-event-target-value */
  const handleAddressChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setAddressValue(e.target.value);
  };

  const handleAmountChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setAmountValue(e.target.value);
  };

  const { sendTransaction } = useSendTransaction();

  const handleSend = () => {
    /* Input validation of Ethereum address */
    if (/^0x[a-fA-F0-9]{40}$/.test(addressValue) != true) {
      setAddressValue('');
      setAmountValue('');
      return;
    }

    /* Input validation of amount */
    if (!isNaN(parseFloat(amountValue)) != true || parseFloat(amountValue) < 0) {
      setAddressValue('');
      setAmountValue('');
      return;
    }

    /* sendTransaction from: https://wagmi.sh/react/api/hooks/useSendTransaction */
    /* Replacing , with . to allow for transaction simulation by smart wallet */
    sendTransaction({
      to: addressValue as `0x${string}`,
      value: BigInt(parseFloat(amountValue.replace(',', '.')) * 1e18),
    });
    setAddressValue('');
    setAmountValue('');
  };

  return (
    <div>
      <StyledInput
        type="text"
        value={addressValue}
        onChange={handleAddressChange}
        placeholder="Address"
      />
      <br/>
      <br/>
      <StyledInput
        type="text"
        value={amountValue}
        onChange={handleAmountChange}
        placeholder="Amount in ETH"
      />
      <br/>
      <br/>
      <button 
      onClick={handleSend} 
      className="font-robotoMono text-center text-xl no-underline border border-yellow-300 rounded-full p-2 w-32 flex items-center justify-center hover:bg-gray-700"
      >
        Send 
      </button>
    </div>
  );
};

export default InputBox;
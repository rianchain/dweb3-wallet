import React, { useState } from 'react';
import { Wallet, Power } from 'lucide-react';

const DynamicWalletNavbar = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState('');
  const [balance, setBalance] = useState(0);

  const connectWallet = () => {
    // Simulasi koneksi wallet
    setIsConnected(true);
    setAddress('0x1234...5678');
    setBalance(1.5);
  };

  const disconnectWallet = () => {
    setIsConnected(false);
    setAddress('');
    setBalance(0);
  };

  return (
    <nav className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">DApp Navbar</div>
        <div className="flex items-center space-x-4">
          {!isConnected ? (
            <button
              onClick={connectWallet}
              className="bg-white text-purple-500 px-4 py-2 rounded-full font-semibold flex items-center hover:bg-purple-100 transition-colors duration-300"
            >
              <Wallet className="mr-2" size={20} />
              Connect Wallet
            </button>
          ) : (
            <>
              <div className="bg-white text-purple-500 px-4 py-2 rounded-full font-semibold">
                Balance: {balance} ETH
              </div>
              <div className="bg-white text-purple-500 px-4 py-2 rounded-full font-semibold">
                {address}
              </div>
              <button
                onClick={disconnectWallet}
                className="bg-red-500 text-white px-4 py-2 rounded-full font-semibold flex items-center hover:bg-red-600 transition-colors duration-300"
              >
                <Power className="mr-2" size={20} />
                Disconnect
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default DynamicWalletNavbar;
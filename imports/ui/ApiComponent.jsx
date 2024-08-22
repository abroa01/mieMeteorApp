import React, { useState } from 'react';
import { MieApi } from 'meteor/abroa01:mieapi-meteor';

const ApiComponent = ({ cookie, userHandle, onLogout }) => {
  const [apiName, setApiName] = useState('');
  const [jsonInput, setJsonInput] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleGetApi = async () => {
    setError('');
    setResult(null);
    try {
      const data = await MieApi.getApi(apiName, cookie, userHandle);
      setResult(data);
    } catch (err) {
      setError(err.message || 'Failed to get API data');
    }
  };

  const handlePutApi = async () => {
    setError('');
    setResult(null);
    try {
      const jsonData = JSON.parse(jsonInput);
      const data = await MieApi.putApi(apiName, jsonData, cookie, userHandle);
      setResult(data);
    } catch (err) {
      setError(err.message || 'Failed to put API data');
    }
  };

  return (
    <div className="api-container">
      <h2>API Interaction</h2>
      <button onClick={onLogout}>Logout</button>
      <div>
        <input
          type="text"
          value={apiName}
          onChange={(e) => setApiName(e.target.value)}
          placeholder="API Name"
        />
        <button onClick={handleGetApi}>Get API</button>
      </div>
      <div>
        <textarea
          value={jsonInput}
          onChange={(e) => setJsonInput(e.target.value)}
          placeholder="JSON Input for PUT"
        />
        <button onClick={handlePutApi}>Put API</button>
      </div>
      {error && <p className="error">{error}</p>}
      {result && (
        <div>
          <h3>API Response:</h3>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default ApiComponent;
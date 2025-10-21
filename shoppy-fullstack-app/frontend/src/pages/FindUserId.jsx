import { useState } from 'react';

export function FindUsername() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    if (!email) {
      setError('이메일을 입력해주세요.');
      return;
    }

    try {
      // 서버 API 호출: POST /auth/find-username
      const res = await fetch('/auth/find-username', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (res.ok) {
        setMessage('입력하신 이메일로 아이디 찾기 안내를 발송했습니다.');
        setEmail('');
      } else {
        setError(data.error || '오류가 발생했습니다.');
      }
    } catch (err) {
      setError('네트워크 오류가 발생했습니다.');
    }
  };

  return (
    <div className="center-layout find-username-form">
      <h1>아이디 찾기</h1>
      <form onSubmit={handleSubmit}>
        <label>가입한 이메일을 입력해주세요.</label>
        <input
          type="email"
          value={email}
          placeholder="이메일 입력"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="btn-main-color">
          아이디 찾기
        </button>
      </form>
      {message && <p style={{ color: 'green' }}>{message}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

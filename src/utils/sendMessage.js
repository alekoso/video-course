export async function sendMessage(message) {
  if (!message) {
    return { success: false, error: "Введите сообщение!" };
  }

  try {
    const response = await fetch("/api/sendMessageTelegram", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    const data = await response.json();

    if (response.ok) {
      return { success: true, data };
    } else {
      return { success: false, error: data.error || "Неизвестная ошибка" };
    }
  } catch (error) {
    return { success: false, error: error.message };
  }
}

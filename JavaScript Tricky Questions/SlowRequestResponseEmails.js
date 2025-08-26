// What is the difference between these two

for (const userId of userIds) {
    await sendEmail(userId);
}

// fixed
await Promise.all(userIds.map(sendEmail));
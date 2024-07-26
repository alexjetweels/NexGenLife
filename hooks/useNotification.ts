import notifee, {TimestampTrigger, TriggerType} from '@notifee/react-native';

export const useNotification = () => {
  async function onDisplayNotification() {
    // Request permissions (required for iOS)
    await notifee.requestPermission();

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    // Display a notification
    await notifee.displayNotification({
      title: 'Notification Title',
      body: 'Main body content of the notification',
      android: {
        channelId,
        smallIcon: 'name-of-a-small-icon', // optional, defaults to 'ic_launcher'.
        // pressAction is needed if you want the notification to open the app when pressed
        pressAction: {
          id: 'default',
        },
      },
    });
  }

  async function onCreateTriggerNotification() {
    const date = new Date(Date.now());
    date.setHours(14);
    date.setMinutes(37);

    // Create a time-based trigger
    const trigger: TimestampTrigger = {
      type: TriggerType.TIMESTAMP,
      timestamp: date.getTime(), // fire at 11:10am (10 minutes before meeting)
    };
    console.log('trigger', trigger);

    // Create a trigger notification
    await notifee.createTriggerNotification(
      {
        title: 'Meeting with Jane',
        body: `Today at ${date.getHours()}:${date.getMinutes()}`,
        android: {
          channelId: 'your-channel-id',
        },
      },
      trigger,
    );
  }

  return {onDisplayNotification, onCreateTriggerNotification};
};

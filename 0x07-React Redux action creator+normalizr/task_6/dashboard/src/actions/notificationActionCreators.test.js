import * as notifActionTypes from "./notificationActionTypes";
import * as notifActionCreators from "./notificationActionCreators";

describe("Testing notification Action Creators", () => {
  it("test markAsRead action", () => {
    const expected = {
      type: notifActionTypes.MARK_AS_READ,
      index: 1,
    };
    expect(notifActionCreators.markAsRead(1)).toEqual(expected);
  });

  it("test setNotificationFilter action", () => {
    const expected = {
      type: notifActionTypes.SET_TYPE_FILTER,
      filter: "DEFAULT",
    };
    expect(
      notifActionCreators.setNotificationFilter(
        notifActionTypes.NotificationTypeFilters.DEFAULT
      )
    ).toEqual(expected);
  });
});

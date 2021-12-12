---
title: Minimalist Meeting Minutes
description: My approach on how to create meaningful meeting minutes that allow to make the best out of each meeting.
date: 2021-12-03
---

<header>

# [{{title}}](/)

{{ comp.dateTime({date: date}) | safe }}

</header><section>

As a remote worker, I am involved in many short online meetings. Unfortunately meetings often end without a clear sign on the next steps. Meeting minutes are a great way to avoid this by summarising the gut of the meeting. But I do not like writing them.

I thus developed my own method to write pragmatic and minimalist meeting minutes. I call my method `CIDA` or [C]ontext, [I]nformation, [D]ecision and [A]ction.

Throughout the post I will show some meeting minutes for a fictional meeting. Most of the time I write my meeting minutes in a code editor in a plain text format like [Markdown]. This allows me to copy & paste meeting minutes without copying unwanted styles. E.g. a Meeting Minute `.docx`, an email to all attendees and a JIRA ticket.

</section><section>

## [C]ontext

To kick off my meeting minutes I like to provide some context for the meeting. For me the most important elements are:

- Name of the meeting
- Date of the meeting
- Attendees

This part is usually quite boring to do so I try to keep it as pragmatic as possible.

E.g. in case I have a meeting in my outlook calendar with the name, date, and attendee list I usually omit this part. I only share the actual notes (IDA) of the meeting by replying to all attendees of the meeting invite.

E.g. in case I document the meeting minutes in a JIRA ticket I will omit the date. Ticket systems usually add the date to ticket comments anyway.

E.g. instead of writing the same attendee list over and over again for weekly jour fix meetings I instead document who was absent or a special guest.

Let's have a look at the Context section of the meeting minutes for the fictional dinner meeting:

```md
# Dinner Planning for May 5th 2021

April 28th 2021

- Sophie
- Oana
- Andrej
- Tobias

---
```

In this fictional example, first names are enough---for business meetings it makes sense to add the full name, company, and email in the attendee list.

```md
- Carrot Inc / Peter Rabbit<peter.rabbit@carrot-inc.com>
```

After providing the Context I list all further items in a simple bullet point list. To separate it from the Context I use a horizontal ruler (`---` in Markdown). Following I will explain each item type in detail.

</section><section>

## [I]nformation

When someone announces an important update I add an Information item. Some typical examples are:

- Someone finished an Action item of last weeks jour fix
- Someone leaves a meeting and no replacement is available
- The deadline of a project became unrealistic due to an unexpected event
- A stakeholder provided good feedback on the project

It is quite easy to document too much Information. When I am in doubt I try to answer this question "Does this Information impact the output of the team/project/etc.". If "Yes" I will document the item.

I start Information items with [I1], [I2], .... The index helps others to reference individual items of the meeting minutes. Here are 3 information elements for our fictional dinner planning:

```md
- [I1] Paul is on sick leave and not able to help plan.
- [I2] Oana found a nice restaurant for the dinner.
- [I3] Tobias received a budget of 500 Euro for the dinner.
```

As you can see I am using the same pattern for each Information item. I name the person who provided the information, followed by a verb and the actual information.

</section><section>

## [D]ecision

When attendees in the meeting decide something important I list it as a Decision item.

- A customer approved a concept
- The group selected a design option for a website
- The group agreed to cancel a project

In comparison to Information items, I find it easy to identify Decision items of a meeting. Decisions are usually the conclusion of a longer discussion.

I am using [D1], [D2], ... to mark Decision items. Here are three Decision items for our fictional dinner planning:

```md
- [D1] The group selected the restaurant found by Oana for the dinner.
- [D2] The dinner should start at 8 pm.
- [D3] Tobias decided to go 15 minutes early to claim the table.
```
In case everyone agrees to the Decision I don't mention a name in the item. In case someone disagrees I will mention it in the item.

```md
- [D1] The group decided to cancel the project. Jane did not agree.
```

Often Decisions start Actions. I try to keep the Decision item in this case and avoid merging it with the Action. This makes it clear that the Decision invoked the Action.

</section><section>

## [A]ction

When I identify a to-do in a meeting I list it as an Action item.

- Someone has to inform the team about the canceled project
- Someone has to adjust the design for a website until the next meeting
- Someone has to buy flight tickets for an upcoming trip


Like Decisions, I find it straightforward to identify Action items. But it is important to check that everything about the Action item is clear before moving on in the meeting. A good Action item clarifies the following questions:

- Who handles the Action item?
- What has to be done and what is the expected output?
- Until when is it necessary to solve the Action item?

I am using [A1], [A2], ... to mark Action items. Here are three Action items for our fantasy dinner planning:

```md
- [A1] Paul should provide feedback to Tobias if he thinks he can make it to the dinner until tomorrow.
- [A2] Tobias has to book the table for 8 pm until the end of this week. In case no table is available he will schedule a crisis meeting.
- [A3] Sophie has to prepare a short welcome speech for the meeting.
```

I replace the names in Action items with "@-mentions" when I share meeting minutes in tools like Outlook or JIRA. This pings everyone about their assigned tasks.

```md
- [A1] @Paul should provide feedback to Tobias if he thinks he can make it to the dinner until tomorrow.
```

</section><section>

## Putting it together

Let's put together the full meeting minutes of our fictional meeting.

```md
# Dinner Planning for May 5th, 2021

April 28th, 2021

- Sophie
- Oana
- Andrej
- Tobias

---

- [I1] Paul is on sick leave and not able to help plan.
- [A1] Paul should provide feedback to Tobias if he thinks he can make it to the dinner until tomorrow.
- [I2] Oana found a nice restaurant for the dinner.
- [I3] Tobias received a budget of 500 Euro for the dinner.
- [D1] The group selected the restaurant found by Oana for the dinner.
- [D2] The dinner should start at 8 pm.
- [A2] Tobias has to book the table for 8 pm until the end of this week. In case no table is available he will schedule a crisis meeting.
- [D3] Tobias decided to go 15 minutes early to claim the table.
- [A3] Sophie has to prepare a short welcome speech for the meeting.

---

[I]nformation, [D]ecision and [A]ction
```

I am not keeping items grouped by type. Instead, I write them in the order they come up in the meeting. This helps to understand the reason behind certain items. Additionally, I am adding a short appendix to explain what IDA stands for.

In case of longer minutes (e.g. a full-day workshop) I section items with separate headlines.

```md

## Introduction

- [I1] ...
- [A1] ...

## Workshop

- [A2] ...
- [D1] ...

(...)
```

</section><footer>

_CIDA helped me to overcome the fear of writing meeting minutes. I now like meeting minutes as a tool to improve the output of my meetings. What is your approach to meeting minutes? Please [let me know](mailto:{{ author.email }}) in case you have some nice tricks to make this necessary evil more enjoyable._

</footer>

{% include "links.njk" %}

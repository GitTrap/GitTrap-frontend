# Git Trap
> Github Data Visualization with Trappin

## Features
* Github Bookmarking
* Git Leaderboards
* Follower Challenges
* Follow, REALLY follow
* Friend Project Following
  * LOC committed
  * Commit Frequency
  * Contributions
* Spotify Playlist Sharing with Github followers


## Data Form


### User (authenticated)

```
{
  login: "jalvarado91",
  id: 1750392,
  avatar_url: "https://avatars.githubusercontent.com/u/1750392?v=3",
  name: 'Juan Alvarado' || null,
  location: "Miami, Florida"
  activity_feed: [
    {
      type: "WatchEvent",
      actor: {
        id: 69156,
        login: "chriscoyier",
        gravatar_id: "",
        url: "https://api.github.com/users/chriscoyier",
        avatar_url: "https://avatars.githubusercontent.com/u/69156?"
      },
      repo: {
        id: 45504918,
        name: "salesforce-ux/sass-deprecate",
        url: "https://api.github.com/repos/salesforce-ux/sass-deprecate"
      },
      payload: {
        action: "started"
      },
      public: true,
      created_at: "2016-04-08T21:12:36Z"
    },
    {
      type: "MemberEvent",
      actor: {
        ... see 'WatchEvent' actor structure
      },
      repo: {
        ... see 'WatchEvent' repo structure
      },
      payload: {
        member: {
          login: "JakeWharton",
          id: 66577,
          avatar_url: "https://avatars.githubusercontent.com/u/66577?v=3",
          url: "https://api.github.com/users/JakeWharton",
        },
        action: "added"
      },
      public: true,
      created_at: "2016-04-08T20:17:51Z"
    },
    {
      type: "IssuesEvent",
      actor: {
        ... see 'WatchEvent' actor structure
      },
      repo: {
        ... see 'WatchEvent' repo structure
      },
      payload: {
        action: "opened",
        issue: {
          url: "https://api.github.com/repos/daimajia/AndroidImageSlider/issues/214",
          repository_url: "https://api.github.com/repos/daimajia/AndroidImageSlider",
          labels_url: "https://api.github.com/repos/daimajia/AndroidImageSlider/issues/214/labels{/name}",
          comments_url: "https://api.github.com/repos/daimajia/AndroidImageSlider/issues/214/comments",
          events_url: "https://api.github.com/repos/daimajia/AndroidImageSlider/issues/214/events",
          html_url: "https://github.com/daimajia/AndroidImageSlider/issues/214",
          id: 146571133,
          number: 214,
          title: "nineoldandroids dependency should be optional.",
          user: {
            login: "safaorhan",
            id: 4990386,
            avatar_url: "https://avatars.githubusercontent.com/u/4990386?v=3",
          },
          state: "open",
          locked: false,
          assignee: null,
          milestone: null,
          comments: 0,
          created_at: "2016-04-07T10:12:34Z",
          updated_at: "2016-04-07T10:12:34Z",
          closed_at: null,
          body: "Since many applications don't support the oldest versions of android, many of them doesn't depend on nineoldandroids library. This dependency can be optional for applications targeting greater Android API levels."
        }
      },
    },
    {
      id: "3856866109",
      type: "ForkEvent",
      actor: {
        ... see 'WatchEvent' actor structure
      },
      repo: {
        ... see 'WatchEvent' repo structure
      },
      payload: {
        forkee: {
          id: 55654227,
          name: "service-workers-101",
          full_name: "paulirish/service-workers-101"
        }
      }
    },
    {
      id: "3840949721",
      type: "CreateEvent",
      actor: {
        ... see 'WatchEvent' actor structure
      },
      repo: {
        ... see 'WatchEvent' repo structure
      },
      payload: {
        ref: null,
        ref_type: "repository",
        master_branch: "master",
        description: "",
        pusher_type: "user"
      },
      public: true,
      created_at: "2016-04-04T01:38:08Z"
    },
    {
      id: "3839181447",
      type: "PushEvent",
      actor: {
        ...
      },
      repo: {
        ...
      },
      payload: {
        push_id: 1048603428,
        size: 1,
        distinct_size: 1,
        ref: "refs/heads/staging",
        head: "73eeeada95be14f21f458089bbaa4a8851f38fe3",
        before: "2b2ec3b6731605ad672bec74c89ad1358521912d",
        commits: [
          {
            ...
          },
          {
            ...
          }
        ]
      },
      public: true,
      created_at: "2016-04-02T22:26:39Z"
    },
    {
      id: "3838386177",
      type: "IssueCommentEvent",
      actor: {},
      repo: {},
      payload: {
        action: "created",
        issue: {},
        comment: {
          url: "https://api.github.com/repos/daimajia/AndroidImageSlider/issues/comments/204694545",
          html_url: "https://github.com/daimajia/AndroidImageSlider/issues/211#issuecomment-204694545",
          issue_url: "https://api.github.com/repos/daimajia/AndroidImageSlider/issues/211",
          id: 204694545,
          user: {},
          created_at: "2016-04-02T11:02:33Z",
          updated_at: "2016-04-02T11:02:33Z",
          body: "Oh, my mistake DefaultSliderView image() need to pass File type"
        }
      },
      public: true,
      created_at: "2016-04-02T11:02:34Z"
    }
  ]
}

```

### User History

```
{
  commit_history: [
    {
      day: "2016-04-02T11:02:34Z",
      commits: 30,
    }
    {
      day: "2016-04-03T11:02:34Z",
      commits: 50,
    }
    {
      day: "2016-04-04T11:02:34Z",
      commits: 23,
    }
    ...
  ],
  top_languages: [
    {
      language: 'css',
      percentage: .16
    },
    {
      language: 'js',
      percentage: .54
    },
    {
      language: 'html',
      percentage: .15
    },
    {
      language: 'c++',
      percentage: .15
    }
  ],
  top_repos: [
    {
      id: 45504918,
      name: "salesforce-ux/sass-deprecate",
      commits: 69,
      issues: 49,
    },
    {
      id: 45504918,
      name: "salesforce-ux/sass-deprecate",
      commits: 69,
      issues: 49,
    },
    {
      id: 45504918,
      name: "salesforce-ux/sass-deprecate",
      commits: 69,
      issues: 49,
    },
    {
      id: 45504918,
      name: "salesforce-ux/sass-deprecate",
      commits: 69,
      issues: 49,
    },
  ]
}
```

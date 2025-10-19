# Pietro Mazzaglia's Academic Website

Built with Jekyll for easy maintenance and GitHub Pages hosting.

## Local Development

1. Install Ruby and Bundler
2. Run `bundle install`
3. Run `bundle exec jekyll serve`
4. Visit `http://localhost:4000`

## Adding a New Publication

Edit `_data/publications.yml` and add a new entry:

```yaml
- title: "Your Paper Title"
  authors: "Author List"
  venue: "Conference/Journal Name"
  year: 2025
  topics: [topic1, topic2]
  thumbnail: assets/images/papers/your-paper.jpg
  award: "Best Paper" # optional
  workshops: ["Workshop Name"] # optional
  links:
    paper: "URL"
    code: "URL"
  venue_type: conference # or journal, workshop
```

## Deployment

Push to GitHub and enable GitHub Pages in repository settings.
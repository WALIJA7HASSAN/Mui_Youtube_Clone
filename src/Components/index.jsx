// This line imports the default export from the Navbar.jsx file and immediately re-exports it.
// The syntax export { default as [Alias] } from '[FilePath]'; allows you to rename or directly re-export a default export under a specific name.

// Re-Exporting: The index.jsx file takes each of these default exports and re-exports them. This way, you can import these components from index.jsx as named exports.

export { default as Navbar } from './Navbar'
export { default as Feed } from './Feed'
export { default as VideoDetail } from './VideoDetail'
export { default as ChannelDetail } from './ChannelDetail'
export { default as SearchFeed } from './SearchFeed'
export { default as Layout } from './Layout'
export {default as Sidebar} from './Sidebar'
export {default as Videos} from './Videos'
export {default as VideoCard} from './VideoCard'
export {default as ChannelCard} from './ChannelCard'


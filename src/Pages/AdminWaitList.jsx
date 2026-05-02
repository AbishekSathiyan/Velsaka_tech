import React, { useEffect, useState, useCallback, useMemo } from "react";
import Swal from "sweetalert2";
import { api } from "../api/client.js";
import { debounce } from "lodash";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { 
  Search, 
  Trash2, 
  Users, 
  RefreshCw, 
  Mail, 
  Calendar,
  ChevronLeft,
  ChevronRight,
  Filter,
  ArrowUp,
  Eye,
  MessageSquare,
  CheckCircle,
  Clock,
  Archive,
  X
} from "lucide-react";

// Custom hook for debounced search
const useDebouncedSearch = (searchTerm, delay = 300) => {
  const [debouncedSearch, setDebouncedSearch] = useState(searchTerm);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, delay);

    return () => clearTimeout(timer);
  }, [searchTerm, delay]);

  return debouncedSearch;
};

// Scroll to top button component
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-indigo-500 hover:bg-indigo-600 rounded-full shadow-lg transition-all duration-300 z-40 group"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
      </button>
    )
  );
};

// Message Detail Modal Component
const MessageModal = ({ message, onClose, onStatusUpdate }) => {
  const [status, setStatus] = useState(message.status || 'pending');
  const [updating, setUpdating] = useState(false);

  const handleStatusUpdate = async (newStatus) => {
    setUpdating(true);
    try {
      const data = await api(`/api/contact/${message._id}/status`, {
        method: "PUT",
        body: JSON.stringify({ status: newStatus }),
      });
      
      if (data.success) {
        setStatus(newStatus);
        onStatusUpdate(message._id, newStatus);
        Swal.fire({
          title: "Status Updated",
          text: `Message marked as ${newStatus}`,
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    } catch (error) {
      console.error("Error updating status:", error);
      Swal.fire({
        title: "Error",
        text: "Failed to update status",
        icon: "error",
      });
    } finally {
      setUpdating(false);
    }
  };

  const formatDate = (date) => {
    if (!date) return "N/A";
    return new Date(date).toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-gradient-to-br from-[#111827] to-[#0F172A] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-700 shadow-2xl animate-scale-up">
        {/* Modal Header */}
        <div className="sticky top-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border-b border-gray-700 p-5 flex justify-between items-start">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <MessageSquare className="w-5 h-5 text-indigo-400" />
              <h3 className="text-xl font-bold text-white">Message Details</h3>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {status === 'pending' && (
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded-md text-xs">
                  <Clock className="w-3 h-3" /> Pending
                </span>
              )}
              {status === 'read' && (
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-500/20 text-blue-400 rounded-md text-xs">
                  <Eye className="w-3 h-3" /> Read
                </span>
              )}
              {status === 'replied' && (
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-500/20 text-green-400 rounded-md text-xs">
                  <CheckCircle className="w-3 h-3" /> Replied
                </span>
              )}
              {status === 'archived' && (
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-500/20 text-gray-400 rounded-md text-xs">
                  <Archive className="w-3 h-3" /> Archived
                </span>
              )}
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-800 rounded-lg transition text-gray-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          {/* Contact Information */}
          <div className="bg-[#0B1120] rounded-xl p-4 border border-gray-800">
            <h4 className="text-sm font-semibold text-indigo-400 mb-3 uppercase tracking-wider">
              Contact Information
            </h4>
            <div className="space-y-2">
              <p className="text-gray-300">
                <span className="font-semibold text-gray-400">Name:</span> {message.fullName}
              </p>
              <p className="text-gray-300">
                <span className="font-semibold text-gray-400">Email:</span> 
                <a href={`mailto:${message.email}`} className="text-indigo-400 ml-2 hover:underline">
                  {message.email}
                </a>
              </p>
              <p className="text-gray-300">
                <span className="font-semibold text-gray-400">Phone:</span> {message.phone || 'Not provided'}
              </p>
              <p className="text-gray-300">
                <span className="font-semibold text-gray-400">Service:</span> 
                <span className="ml-2 px-2 py-1 bg-indigo-500/20 text-indigo-400 rounded-md text-xs">
                  {message.service}
                </span>
              </p>
              <p className="text-gray-300">
                <span className="font-semibold text-gray-400">Received:</span> {formatDate(message.createdAt)}
              </p>
            </div>
          </div>

          {/* Message Content */}
          <div className="bg-[#0B1120] rounded-xl p-4 border border-gray-800">
            <h4 className="text-sm font-semibold text-indigo-400 mb-3 uppercase tracking-wider">
              Message Content
            </h4>
            <div className="bg-gray-900/50 rounded-lg p-4">
              <p className="text-gray-300 whitespace-pre-wrap leading-relaxed">
                {message.message}
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-[#0B1120] rounded-xl p-4 border border-gray-800">
            <h4 className="text-sm font-semibold text-indigo-400 mb-3 uppercase tracking-wider">
              Quick Actions
            </h4>
            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${message.email}?subject=Response to your ${message.service} inquiry&body=Dear ${message.fullName},%0A%0AThank you for contacting VELSAKA TECH...`}
                className="flex-1 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg text-center transition"
              >
                Reply via Email
              </a>
              <a
                href={`https://wa.me/${message.phone?.replace(/\D/g, '') || '917092085864'}?text=Hi ${message.fullName},%0A%0AThank you for contacting VELSAKA TECH...`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-center transition"
              >
                WhatsApp Reply
              </a>
            </div>
          </div>

          {/* Status Update */}
          <div className="bg-[#0B1120] rounded-xl p-4 border border-gray-800">
            <h4 className="text-sm font-semibold text-indigo-400 mb-3 uppercase tracking-wider">
              Update Status
            </h4>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => handleStatusUpdate('pending')}
                disabled={status === 'pending' || updating}
                className="px-3 py-1.5 bg-yellow-500/10 hover:bg-yellow-500/20 text-yellow-400 rounded-lg text-sm transition disabled:opacity-50"
              >
                <Clock className="w-4 h-4 inline mr-1" /> Pending
              </button>
              <button
                onClick={() => handleStatusUpdate('read')}
                disabled={status === 'read' || updating}
                className="px-3 py-1.5 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 rounded-lg text-sm transition disabled:opacity-50"
              >
                <Eye className="w-4 h-4 inline mr-1" /> Read
              </button>
              <button
                onClick={() => handleStatusUpdate('replied')}
                disabled={status === 'replied' || updating}
                className="px-3 py-1.5 bg-green-500/10 hover:bg-green-500/20 text-green-400 rounded-lg text-sm transition disabled:opacity-50"
              >
                <CheckCircle className="w-4 h-4 inline mr-1" /> Replied
              </button>
              <button
                onClick={() => handleStatusUpdate('archived')}
                disabled={status === 'archived' || updating}
                className="px-3 py-1.5 bg-gray-500/10 hover:bg-gray-500/20 text-gray-400 rounded-lg text-sm transition disabled:opacity-50"
              >
                <Archive className="w-4 h-4 inline mr-1" /> Archive
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// User Card Component with Message Preview
const UserCard = ({ user, onDelete, onViewMessage, isDeleting, messageCount }) => {
  const formatDate = (date) => {
    if (!date) return "N/A";
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getMessagePreview = () => {
    if (user.message) {
      return user.message.length > 80 ? user.message.substring(0, 80) + '...' : user.message;
    }
    return 'No message content';
  };

  const getStatusColor = () => {
    switch(user.status) {
      case 'read': return 'text-blue-400 bg-blue-500/10';
      case 'replied': return 'text-green-400 bg-green-500/10';
      case 'archived': return 'text-gray-400 bg-gray-500/10';
      default: return 'text-yellow-400 bg-yellow-500/10';
    }
  };

  const getStatusIcon = () => {
    switch(user.status) {
      case 'read': return <Eye className="w-3 h-3" />;
      case 'replied': return <CheckCircle className="w-3 h-3" />;
      case 'archived': return <Archive className="w-3 h-3" />;
      default: return <Clock className="w-3 h-3" />;
    }
  };

  return (
    <div className="group relative bg-gradient-to-br from-[#111827] to-[#0F172A] border border-gray-800 rounded-xl hover:border-indigo-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 to-indigo-500/0 group-hover:from-indigo-500/5 rounded-xl transition-all duration-300" />
      
      <div className="relative p-5">
        <div className="flex items-start justify-between">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <Mail className="w-4 h-4 text-indigo-400" />
              <p className="font-medium text-gray-200 truncate">{user.email}</p>
              <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs ${getStatusColor()}`}>
                {getStatusIcon()}
                <span className="capitalize">{user.status || 'pending'}</span>
              </span>
            </div>
            
            {/* Message Preview */}
            <div 
              className="mt-2 p-2 bg-gray-800/30 rounded-lg cursor-pointer hover:bg-gray-800/50 transition group/msg"
              onClick={() => onViewMessage(user)}
            >
              <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
                <MessageSquare className="w-3 h-3" />
                <span>Message Preview</span>
              </div>
              <p className="text-sm text-gray-300 line-clamp-2">
                {getMessagePreview()}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3 mt-2 text-xs">
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-800/50 rounded-md text-gray-400">
                <Calendar className="w-3 h-3" />
                Joined: {formatDate(user.createdAt)}
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-gray-800/50 rounded-md text-gray-400">
                <MessageSquare className="w-3 h-3" />
                Message ID: {user._id.slice(-8)}
              </span>
            </div>
          </div>

          <div className="flex gap-2 ml-4">
            <button
              onClick={() => onViewMessage(user)}
              className="p-2 text-indigo-400 hover:text-indigo-300 hover:bg-indigo-500/10 rounded-lg transition-all duration-200 group/btn"
              title="View Message"
            >
              <Eye className="w-5 h-5 transition-transform group-hover/btn:scale-110" />
            </button>
            <button
              onClick={() => onDelete(user._id, user.email)}
              disabled={isDeleting}
              className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed group/btn"
            >
              {isDeleting ? (
                <div className="w-5 h-5 border-2 border-red-400 border-t-transparent rounded-full animate-spin" />
              ) : (
                <Trash2 className="w-5 h-5 transition-transform group-hover/btn:scale-110" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Loading Skeleton Component
const LoadingSkeleton = () => (
  <div className="space-y-3">
    {[...Array(5)].map((_, i) => (
      <div key={i} className="bg-[#111827] border border-gray-800 rounded-xl p-5 animate-pulse">
        <div className="flex justify-between">
          <div className="flex-1">
            <div className="h-5 bg-gray-700 rounded w-3/4 mb-3" />
            <div className="h-16 bg-gray-700 rounded w-full mb-3" />
            <div className="flex gap-3">
              <div className="h-6 bg-gray-700 rounded w-24" />
              <div className="h-6 bg-gray-700 rounded w-20" />
            </div>
          </div>
          <div className="flex gap-2">
            <div className="w-9 h-9 bg-indigo-500/20 rounded-lg" />
            <div className="w-9 h-9 bg-red-500/20 rounded-lg" />
          </div>
        </div>
      </div>
    ))}
  </div>
);

// Empty State Component
const EmptyState = ({ hasSearch, onClearSearch }) => (
  <div className="text-center py-16">
    <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-800/50 rounded-full mb-4">
      <MessageSquare className="w-10 h-10 text-gray-600" />
    </div>
    <h3 className="text-xl font-semibold text-gray-300 mb-2">
      {hasSearch ? "No matching messages found" : "No messages in inbox"}
    </h3>
    <p className="text-gray-400 mb-6">
      {hasSearch 
        ? "Try adjusting your search or filters" 
        : "Contact form submissions will appear here"}
    </p>
    {hasSearch && (
      <button
        onClick={onClearSearch}
        className="px-4 py-2 bg-indigo-500/10 hover:bg-indigo-500/20 text-indigo-400 rounded-lg transition"
      >
        Clear Search
      </button>
    )}
  </div>
);

// Stats Card Component
const StatsCard = ({ title, value, icon: Icon, color }) => (
  <div className="bg-gradient-to-br from-[#111827] to-[#0F172A] border border-gray-800 rounded-xl p-5">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-400 mb-1">{title}</p>
        <p className="text-2xl font-bold text-white">{value}</p>
      </div>
      <div className={`p-3 bg-${color}-500/10 rounded-lg`}>
        <Icon className={`w-6 h-6 text-${color}-400`} />
      </div>
    </div>
  </div>
);

// Main Component
export default function AdminWaitlist() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [deletingId, setDeletingId] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [user, setUser] = useState(null);
  const [selectedMessage, setSelectedMessage] = useState(null);

  const debouncedSearchTerm = useDebouncedSearch(searchTerm);

  // Fetch current user for header
  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const data = await api("/api/auth/me", { method: "GET" });
        if (data.success) {
          setUser(data.data);
        }
      } catch (err) {
        console.error("Failed to fetch user:", err);
      }
    };
    fetchCurrentUser();
  }, []);

  const fetchMessages = useCallback(async (showRefreshAnimation = false) => {
    try {
      if (showRefreshAnimation) setRefreshing(true);
      else setLoading(true);
      
      setError(null);

      const data = await api("/api/contact", {
        method: "GET",
        headers: {
          "Cache-Control": "no-cache",
        },
      });

      if (data.success) {
        setMessages(data.data);
      } else {
        setError(data.message || "Failed to fetch messages");
      }
    } catch (err) {
      setError(err.message || "Unauthorized or server error");
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    fetchMessages();
  }, [fetchMessages]);

  // Filter and paginate messages
  const filteredMessages = useMemo(() => {
    if (!debouncedSearchTerm) return messages;
    
    return messages.filter((msg) =>
      msg.email?.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
      msg.fullName?.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
      msg.message?.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    );
  }, [messages, debouncedSearchTerm]);

  const paginatedMessages = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredMessages.slice(startIndex, endIndex);
  }, [filteredMessages, currentPage, itemsPerPage]);

  const totalPages = Math.ceil(filteredMessages.length / itemsPerPage);

  // Calculate stats
  const stats = useMemo(() => {
    const total = messages.length;
    const pending = messages.filter(m => m.status === 'pending').length;
    const read = messages.filter(m => m.status === 'read').length;
    const replied = messages.filter(m => m.status === 'replied').length;
    return { total, pending, read, replied };
  }, [messages]);

  const deleteMessage = async (id, email) => {
    const result = await Swal.fire({
      title: "Delete message?",
      html: `Are you sure you want to delete message from <strong>${email}</strong>?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#3b82f6",
      confirmButtonText: "Yes, delete",
      cancelButtonText: "Cancel",
      reverseButtons: true,
    });

    if (!result.isConfirmed) return;

    setDeletingId(id);
    try {
      const data = await api(`/api/contact/${id}`, {
        method: "DELETE",
      });

      if (data.success) {
        await Swal.fire({
          title: "Deleted!",
          text: "Message has been deleted.",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });
        
        setMessages(prevMessages => prevMessages.filter(msg => msg._id !== id));
        
        if (paginatedMessages.length === 1 && currentPage > 1) {
          setCurrentPage(prev => prev - 1);
        }
      } else {
        throw new Error(data.message || "Delete failed");
      }
    } catch (err) {
      await Swal.fire({
        title: "Error",
        text: err.message || "Failed to delete message. Please try again.",
        icon: "error",
        confirmButtonColor: "#3b82f6",
      });
    } finally {
      setDeletingId(null);
    }
  };

  const handleViewMessage = (message) => {
    setSelectedMessage(message);
    // Mark as read when opened
    if (message.status === 'pending') {
      updateMessageStatus(message._id, 'read');
    }
  };

  const updateMessageStatus = async (id, newStatus) => {
    try {
      const data = await api(`/api/contact/${id}/status`, {
        method: "PUT",
        body: JSON.stringify({ status: newStatus }),
      });
      
      if (data.success) {
        setMessages(prevMessages => 
          prevMessages.map(msg => 
            msg._id === id ? { ...msg, status: newStatus } : msg
          )
        );
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const handleStatusUpdate = (id, newStatus) => {
    setMessages(prevMessages => 
      prevMessages.map(msg => 
        msg._id === id ? { ...msg, status: newStatus } : msg
      )
    );
  };

  const handleRefresh = () => {
    fetchMessages(true);
    setCurrentPage(1);
    setSearchTerm("");
  };

  const handleClearSearch = () => {
    setSearchTerm("");
    setCurrentPage(1);
  };

  const handleLogout = async () => {
    try {
      await api("/api/auth/logout", { method: "POST" });
      window.location.href = "/login";
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  if (loading) {
    return (
      <>
        <Header user={user} onLogout={handleLogout} />
        <div className="min-h-screen bg-gradient-to-br from-[#0B1120] to-[#0F172A] pt-20">
          <div className="container mx-auto px-4 py-8">
            <LoadingSkeleton />
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Header user={user} onLogout={handleLogout} />
        <div className="min-h-screen bg-gradient-to-br from-[#0B1120] to-[#0F172A] flex items-center justify-center p-4 pt-20">
          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 max-w-md text-center">
            <div className="text-red-400 text-6xl mb-4">⚠️</div>
            <h3 className="text-xl font-semibold text-red-400 mb-2">Error</h3>
            <p className="text-gray-400">{error}</p>
            <button
              onClick={() => fetchMessages()}
              className="mt-4 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 rounded-lg transition"
            >
              Try Again
            </button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header user={user} onLogout={handleLogout} />
      
      <main className="min-h-screen bg-gradient-to-br from-[#0B1120] to-[#0F172A] pt-20">
        <div className="container mx-auto px-4 py-8">
          {/* Header Section */}
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Contact Messages
                </h1>
                <p className="text-gray-400 mt-1">
                  Manage and respond to customer inquiries
                </p>
              </div>

              <button
                onClick={handleRefresh}
                disabled={refreshing}
                className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/30 rounded-lg transition disabled:opacity-50"
              >
                <RefreshCw className={`w-4 h-4 ${refreshing ? 'animate-spin' : ''}`} />
                <span>Refresh</span>
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            <StatsCard 
              title="Total Messages" 
              value={stats.total} 
              icon={MessageSquare}
              color="indigo"
            />
            <StatsCard 
              title="Pending" 
              value={stats.pending} 
              icon={Clock}
              color="yellow"
            />
            <StatsCard 
              title="Read" 
              value={stats.read} 
              icon={Eye}
              color="blue"
            />
            <StatsCard 
              title="Replied" 
              value={stats.replied} 
              icon={CheckCircle}
              color="green"
            />
          </div>

          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                className="w-full pl-10 pr-4 py-2.5 rounded-lg bg-[#111827] border border-gray-700 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition text-gray-200 placeholder-gray-500"
                placeholder="Search by name, email or message..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1);
                }}
              />
              {searchTerm && (
                <button
                  onClick={handleClearSearch}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
                >
                  ×
                </button>
              )}
            </div>
          </div>

          {/* Messages List */}
          <div className="space-y-3">
            {paginatedMessages.length === 0 ? (
              <EmptyState 
                hasSearch={!!searchTerm} 
                onClearSearch={handleClearSearch}
              />
            ) : (
              <>
                {paginatedMessages.map((message) => (
                  <UserCard
                    key={message._id}
                    user={message}
                    onDelete={deleteMessage}
                    onViewMessage={handleViewMessage}
                    isDeleting={deletingId === message._id}
                  />
                ))}
              </>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 pt-4 border-t border-gray-800">
              <div className="text-sm text-gray-400">
                Showing {((currentPage - 1) * itemsPerPage) + 1} to{" "}
                {Math.min(currentPage * itemsPerPage, filteredMessages.length)} of{" "}
                {filteredMessages.length} messages
              </div>
              
              <div className="flex gap-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg bg-[#111827] border border-gray-700 hover:border-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                <div className="flex gap-1">
                  {[...Array(Math.min(5, totalPages))].map((_, i) => {
                    let pageNum;
                    if (totalPages <= 5) {
                      pageNum = i + 1;
                    } else if (currentPage <= 3) {
                      pageNum = i + 1;
                    } else if (currentPage >= totalPages - 2) {
                      pageNum = totalPages - 4 + i;
                    } else {
                      pageNum = currentPage - 2 + i;
                    }
                    
                    return (
                      <button
                        key={pageNum}
                        onClick={() => setCurrentPage(pageNum)}
                        className={`px-3 py-2 rounded-lg transition ${
                          currentPage === pageNum
                            ? "bg-indigo-500 text-white"
                            : "bg-[#111827] border border-gray-700 hover:border-indigo-500 text-gray-400"
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                </div>
                
                <button
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg bg-[#111827] border border-gray-700 hover:border-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
      <ScrollToTop />

      {/* Message Modal */}
      {selectedMessage && (
        <MessageModal 
          message={selectedMessage}
          onClose={() => setSelectedMessage(null)}
          onStatusUpdate={handleStatusUpdate}
        />
      )}

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scale-up {
          from { 
            opacity: 0;
            transform: scale(0.95);
          }
          to { 
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
        .animate-scale-up {
          animation: scale-up 0.3s ease-out;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  );
}
import React, { useEffect, useState, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { api } from "../api/client.js";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import {
  Search,
  Trash2,
  Users,
  RefreshCw,
  Mail,
  Calendar,
  ChevronLeft,
  ChevronRight,
  ArrowUp,
  Eye,
  MessageSquare,
  CheckCircle,
  Clock,
  Archive,
  X,
  UserPlus,
  Inbox,
  FileText,
  AlertCircle,
  Sparkles,
  TrendingUp,
  Zap,
  Send,
  Phone,
  AtSign,
  Briefcase,
  Copy,
  Check,
  Loader2,
  Gift,
  Heart,
  Menu,
  LayoutDashboard,
  MessageCircle,
  UsersRound,
  Settings,
  LogOut,
  Bell,
  Sun,
  Moon,
  Filter,
  MoreVertical,
  Download,
  Printer,
  Star,
  Award,
  Crown,
  Rocket,
  Globe,
  Shield,
  Database,
  BarChart3,
  Activity,
  Smartphone,
  Laptop,
  Tablet,
  Code,
  Palette,
  Megaphone,
  Target,
  Compass,
  Zap as ZapIcon,
  Layers,
  Grid,
  List,
  Columns,
} from "lucide-react";

// Custom hook for debounced search
const useDebouncedSearch = (searchTerm, delay = 300) => {
  const [debouncedSearch, setDebouncedSearch] = useState(searchTerm);
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(searchTerm), delay);
    return () => clearTimeout(timer);
  }, [searchTerm, delay]);
  return debouncedSearch;
};

// Scroll to top button
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.pageYOffset > 300);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);
  return isVisible && (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-8 right-8 p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-40 group animate-bounce"
    >
      <ArrowUp className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
    </button>
  );
};

// Modern Stat Card
const ModernStatCard = ({ title, value, icon: Icon, trend, subtitle, color }) => {
  const gradients = {
    indigo: "from-indigo-500/20 via-indigo-600/10 to-transparent",
    purple: "from-purple-500/20 via-purple-600/10 to-transparent",
    emerald: "from-emerald-500/20 via-emerald-600/10 to-transparent",
    amber: "from-amber-500/20 via-amber-600/10 to-transparent",
    rose: "from-rose-500/20 via-rose-600/10 to-transparent",
    cyan: "from-cyan-500/20 via-cyan-600/10 to-transparent",
  };

  const icons = {
    indigo: <BarChart3 className="w-6 h-6 text-indigo-400" />,
    purple: <Activity className="w-6 h-6 text-purple-400" />,
    emerald: <Users className="w-6 h-6 text-emerald-400" />,
    amber: <Clock className="w-6 h-6 text-amber-400" />,
    rose: <Heart className="w-6 h-6 text-rose-400" />,
    cyan: <Database className="w-6 h-6 text-cyan-400" />,
  };

  return (
    <div className={`group relative overflow-hidden bg-gradient-to-br ${gradients[color]} backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:scale-105 transition-all duration-300 cursor-pointer`}>
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-2xl" />
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-gradient-to-br from-white/10 to-white/5 rounded-xl backdrop-blur-sm">
            <Icon className="w-6 h-6 text-white/80" />
          </div>
          <div className="text-right">
            <p className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {value}
            </p>
            {subtitle && <p className="text-xs text-gray-400 mt-1">{subtitle}</p>}
          </div>
        </div>
        <p className="text-sm font-medium text-gray-400 mb-2">{title}</p>
        {trend && (
          <div className="flex items-center gap-1">
            <TrendingUp className="w-3 h-3 text-emerald-400" />
            <span className="text-xs text-emerald-400">{trend}</span>
          </div>
        )}
      </div>
    </div>
  );
};

// Waitlist Modal
const WaitlistModal = ({ entry, onClose }) => {
  const [copied, setCopied] = useState(false);
  
  const copyEmail = () => {
    navigator.clipboard.writeText(entry.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formatDate = (date) => {
    if (!date) return "N/A";
    return new Date(date).toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-in fade-in zoom-in duration-300">
      <div className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/10 shadow-2xl">
        <div className="sticky top-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-sm border-b border-white/10 p-5 flex justify-between items-start">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl">
              <Crown className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Waitlist Subscriber
              </h3>
              <p className="text-sm text-gray-400">Early access member • Priority updates</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/10 rounded-xl transition-all duration-200"
          >
            <X className="w-5 h-5 text-gray-400 hover:text-white" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="bg-white/5 rounded-xl p-5 border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-semibold text-indigo-400 uppercase tracking-wider flex items-center gap-2">
                <Star className="w-4 h-4" />
                Subscriber Information
              </h4>
              <button
                onClick={copyEmail}
                className="px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-200 text-sm flex items-center gap-2"
              >
                {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                {copied ? "Copied!" : "Copy Email"}
              </button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-lg">
                <Mail className="w-5 h-5 text-indigo-400" />
                <div className="flex-1">
                  <p className="text-xs text-gray-500">Email Address</p>
                  <a href={`mailto:${entry.email}`} className="text-white hover:text-indigo-400 transition font-medium">
                    {entry.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                <Calendar className="w-5 h-5 text-purple-400" />
                <div>
                  <p className="text-xs text-gray-500">Joined Waitlist</p>
                  <p className="text-white">{formatDate(entry.createdAt)}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-xl p-5 border border-indigo-500/20">
            <h4 className="text-sm font-semibold text-indigo-400 mb-4 uppercase tracking-wider flex items-center gap-2">
              <Rocket className="w-4 h-4" />
              Quick Actions
            </h4>
            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${entry.email}?subject=Welcome to VELSAKA TECH Waitlist&body=Dear subscriber,%0A%0AThank you for joining our waitlist! We're excited to have you on board. We'll notify you as soon as we launch.%0A%0AIn the meantime, follow us on social media for updates:%0A%0ABest regards,%0AVELSAKA TECH Team`}
                className="flex-1 px-4 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white rounded-xl text-center transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                <Send className="w-4 h-4 group-hover:scale-110 transition-transform" />
                Send Welcome Email
              </a>
            </div>
          </div>

          <div className="text-center text-xs text-gray-500 pt-2">
            <p>Subscriber since {new Date(entry.createdAt).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Message Modal
const MessageModal = ({ message, onClose, onStatusUpdate }) => {
  const [status, setStatus] = useState(message.status || "pending");
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
          background: "#1f2937",
          color: "#fff",
        });
      }
    } catch (error) {
      Swal.fire({ title: "Error", text: "Failed to update status", icon: "error" });
    } finally {
      setUpdating(false);
    }
  };

  const formatDate = (date) => new Date(date).toLocaleString("en-US", {
    year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit",
  });

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-in fade-in zoom-in duration-300">
      <div className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-white/10 shadow-2xl">
        <div className="sticky top-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-sm border-b border-white/10 p-5 flex justify-between items-start">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl">
              <MessageSquare className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Message Details
              </h3>
              <div className="flex gap-2 mt-1">
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  status === "pending" ? "bg-yellow-500/20 text-yellow-400" :
                  status === "read" ? "bg-blue-500/20 text-blue-400" :
                  status === "replied" ? "bg-green-500/20 text-green-400" :
                  "bg-gray-500/20 text-gray-400"
                }`}>
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </span>
              </div>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-xl transition">
            <X className="w-5 h-5 text-gray-400 hover:text-white" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="bg-white/5 rounded-xl p-5 border border-white/10">
            <h4 className="text-sm font-semibold text-indigo-400 mb-4 uppercase tracking-wider flex items-center gap-2">
              <Users className="w-4 h-4" />
              Contact Information
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                <Users className="w-5 h-5 text-indigo-400" />
                <div>
                  <p className="text-xs text-gray-500">Full Name</p>
                  <p className="text-white font-medium">{message.fullName}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                <AtSign className="w-5 h-5 text-purple-400" />
                <div>
                  <p className="text-xs text-gray-500">Email</p>
                  <a href={`mailto:${message.email}`} className="text-indigo-400 hover:underline text-sm">
                    {message.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                <Phone className="w-5 h-5 text-emerald-400" />
                <div>
                  <p className="text-xs text-gray-500">Phone</p>
                  <p className="text-white">{message.phone || "Not provided"}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                <Briefcase className="w-5 h-5 text-amber-400" />
                <div>
                  <p className="text-xs text-gray-500">Service</p>
                  <span className="text-xs px-2 py-1 bg-indigo-500/20 text-indigo-400 rounded-full">
                    {message.service}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/5 rounded-xl p-5 border border-white/10">
            <h4 className="text-sm font-semibold text-indigo-400 mb-4 uppercase tracking-wider flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Message Content
            </h4>
            <div className="bg-black/30 rounded-lg p-4">
              <p className="text-gray-300 whitespace-pre-wrap leading-relaxed">{message.message}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-xl p-5 border border-indigo-500/20">
              <h4 className="text-sm font-semibold text-indigo-400 mb-4 uppercase tracking-wider flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Quick Actions
              </h4>
              <div className="space-y-3">
                <a href={`mailto:${message.email}?subject=Response to your ${message.service} inquiry`}
                  className="w-full px-4 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white rounded-xl text-center transition flex items-center justify-center gap-2 group">
                  <Send className="w-4 h-4 group-hover:scale-110 transition-transform" /> Reply via Email
                </a>
                <a href={`https://wa.me/${message.phone?.replace(/\D/g, "") || "917092085864"}?text=Hi ${message.fullName},%0A%0AThank you for contacting VELSAKA TECH...`}
                  target="_blank" rel="noopener noreferrer"
                  className="w-full px-4 py-2.5 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white rounded-xl text-center transition flex items-center justify-center gap-2 group">
                  <Send className="w-4 h-4 group-hover:scale-110 transition-transform" /> WhatsApp Reply
                </a>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-5 border border-white/10">
              <h4 className="text-sm font-semibold text-indigo-400 mb-4 uppercase tracking-wider flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Update Status
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {["pending", "read", "replied", "archived"].map((s) => (
                  <button key={s}
                    onClick={() => handleStatusUpdate(s)}
                    disabled={status === s || updating}
                    className={`px-3 py-2 rounded-lg text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
                      status === s 
                        ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/25"
                        : "bg-white/10 hover:bg-white/20 text-gray-400"
                    } disabled:opacity-50`}
                  >
                    {s === "pending" && <Clock className="w-3 h-3" />}
                    {s === "read" && <Eye className="w-3 h-3" />}
                    {s === "replied" && <CheckCircle className="w-3 h-3" />}
                    {s === "archived" && <Archive className="w-3 h-3" />}
                    {s.charAt(0).toUpperCase() + s.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Message Card
const MessageCard = ({ message, onDelete, onViewMessage, isDeleting }) => {
  const getStatusConfig = () => ({
    read: { icon: Eye, color: "blue", bg: "bg-blue-500/10", border: "border-blue-500/20" },
    replied: { icon: CheckCircle, color: "green", bg: "bg-green-500/10", border: "border-green-500/20" },
    archived: { icon: Archive, color: "gray", bg: "bg-gray-500/10", border: "border-gray-500/20" },
    pending: { icon: Clock, color: "yellow", bg: "bg-yellow-500/10", border: "border-yellow-500/20" },
  }[message.status || "pending"]);

  const StatusIcon = getStatusConfig().icon;

  return (
    <div className="group relative bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-indigo-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/0 to-purple-500/0 group-hover:from-indigo-500/5 group-hover:to-purple-500/5 rounded-2xl transition-all duration-300" />
      <div className="relative p-5">
        <div className="flex items-start justify-between">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-3 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-lg">
                  <Mail className="w-4 h-4 text-indigo-400" />
                </div>
                <p className="font-medium text-white truncate">{message.email}</p>
              </div>
              <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs ${getStatusConfig().bg} text-${getStatusConfig().color}-400 border ${getStatusConfig().border}`}>
                <StatusIcon className="w-3 h-3" />
                <span className="capitalize">{message.status || "pending"}</span>
              </span>
            </div>

            <div
              onClick={() => onViewMessage(message)}
              className="mt-3 p-3 bg-white/5 rounded-xl cursor-pointer hover:bg-white/10 transition-all duration-200 group/msg"
            >
              <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
                <MessageSquare className="w-3 h-3" />
                <span>Message Preview</span>
              </div>
              <p className="text-sm text-gray-300 line-clamp-2">
                {message.message?.length > 80 ? message.message.substring(0, 80) + "..." : message.message || "No message content"}
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mt-3">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/5 rounded-lg text-xs text-gray-400">
                <Calendar className="w-3 h-3" />
                {new Date(message.createdAt).toLocaleDateString()}
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/5 rounded-lg text-xs text-gray-400">
                <Users className="w-3 h-3" />
                {message.fullName}
              </span>
            </div>
          </div>

          <div className="flex gap-2 ml-4">
            <button
              onClick={() => onViewMessage(message)}
              className="p-2 text-indigo-400 hover:text-indigo-300 hover:bg-indigo-500/10 rounded-xl transition-all duration-200"
            >
              <Eye className="w-5 h-5" />
            </button>
            <button
              onClick={() => onDelete(message._id, message.email)}
              disabled={isDeleting}
              className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-xl transition-all duration-200 disabled:opacity-50"
            >
              {isDeleting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Trash2 className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Waitlist Card
const WaitlistCard = ({ entry, onView, onDelete, isDeleting }) => (
  <div className="group relative bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-emerald-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-500/10">
    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 to-teal-500/0 group-hover:from-emerald-500/5 group-hover:to-teal-500/5 rounded-2xl transition-all duration-300" />
    <div className="relative p-5">
      <div className="flex items-start justify-between">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-1.5 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-lg">
              <UserPlus className="w-4 h-4 text-emerald-400" />
            </div>
            <p className="font-medium text-white truncate">{entry.email}</p>
          </div>
          <div className="flex flex-wrap gap-2 mt-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white/5 rounded-lg text-xs text-gray-400">
              <Calendar className="w-3 h-3" />
              Joined: {new Date(entry.createdAt).toLocaleDateString()}
            </span>
          </div>
        </div>
        <div className="flex gap-2 ml-4">
          <button onClick={() => onView(entry)} className="p-2 text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10 rounded-xl transition-all duration-200">
            <Eye className="w-5 h-5" />
          </button>
          <button onClick={() => onDelete(entry._id, entry.email)} disabled={isDeleting} className="p-2 text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-xl transition-all duration-200 disabled:opacity-50">
            {isDeleting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Trash2 className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </div>
  </div>
);

// Loading Skeleton
const LoadingSkeleton = () => (
  <div className="space-y-4">
    {[...Array(5)].map((_, i) => (
      <div key={i} className="bg-gray-900/50 border border-white/10 rounded-2xl p-5 animate-pulse">
        <div className="flex justify-between">
          <div className="flex-1 space-y-3">
            <div className="h-5 bg-gradient-to-r from-gray-700 to-gray-600 rounded w-3/4" />
            <div className="h-16 bg-gradient-to-r from-gray-700 to-gray-600 rounded w-full" />
            <div className="flex gap-2">
              <div className="h-6 bg-gradient-to-r from-gray-700 to-gray-600 rounded w-24" />
              <div className="h-6 bg-gradient-to-r from-gray-700 to-gray-600 rounded w-20" />
            </div>
          </div>
          <div className="flex gap-2">
            <div className="w-9 h-9 bg-indigo-500/20 rounded-xl animate-pulse" />
            <div className="w-9 h-9 bg-red-500/20 rounded-xl animate-pulse" />
          </div>
        </div>
      </div>
    ))}
  </div>
);

// Empty State
const EmptyState = ({ type, hasSearch, onClearSearch }) => (
  <div className="text-center py-16">
    <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-white/5 to-white/10 rounded-full mb-6 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full animate-pulse" />
      {type === 'messages' ? <Inbox className="w-14 h-14 text-gray-500" /> : <Heart className="w-14 h-14 text-gray-500" />}
    </div>
    <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-300 to-gray-500 bg-clip-text text-transparent mb-2">
      {hasSearch ? "No matching results" : `No ${type === 'messages' ? 'messages' : 'waitlist entries'} yet`}
    </h3>
    <p className="text-gray-400 mb-6 max-w-md mx-auto">
      {hasSearch ? "Try adjusting your search terms or clear the filters" : type === 'messages' ? "Contact form submissions will appear here once customers reach out" : "Waitlist signups will appear here when users join for early access"}
    </p>
    {hasSearch && (
      <button onClick={onClearSearch} className="px-6 py-2.5 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white rounded-xl transition-all duration-200 shadow-lg shadow-indigo-500/25">
        Clear Search
      </button>
    )}
  </div>
);

// Modern Tab Button
const ModernTabButton = ({ active, onClick, icon: Icon, label, count }) => (
  <button
    onClick={onClick}
    className={`relative flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 ${
      active
        ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/25 scale-105"
        : "text-gray-400 hover:text-white hover:bg-white/10"
    }`}
  >
    <Icon className="w-4 h-4" />
    <span className="font-medium">{label}</span>
    {count > 0 && (
      <span className={`text-xs px-2 py-0.5 rounded-full ${
        active ? "bg-white/20" : "bg-white/10"
      }`}>
        {count}
      </span>
    )}
    {active && (
      <div className="absolute -bottom-px left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full" />
    )}
  </button>
);

// Main Component
export default function AdminPage() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [waitlist, setWaitlist] = useState([]);
  const [activeTab, setActiveTab] = useState("messages");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);
  const [deletingId, setDeletingId] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [user, setUser] = useState(null);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [selectedWaitlistEntry, setSelectedWaitlistEntry] = useState(null);

  const debouncedSearchTerm = useDebouncedSearch(searchTerm);

  // Fetch current user
  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const token = localStorage.getItem("adminToken");
        if (!token) return navigate("/admin/login");
        const data = await api("/api/admin/auth/me", {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        });
        if (data.success) setUser(data.data);
        else {
          localStorage.removeItem("adminToken");
          navigate("/admin/login");
        }
      } catch (err) {
        localStorage.removeItem("adminToken");
        navigate("/admin/login");
      }
    };
    fetchCurrentUser();
  }, [navigate]);

  // Fetch messages
  const fetchMessages = useCallback(async (showRefreshAnimation = false) => {
    try {
      if (showRefreshAnimation) setRefreshing(true);
      else setLoading(true);
      const token = localStorage.getItem("adminToken");
      const data = await api("/api/contact", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (data.success) setMessages(data.data || []);
      else setError(data.message);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  // Fetch waitlist
  const fetchWaitlist = useCallback(async (showRefreshAnimation = false) => {
    try {
      if (showRefreshAnimation) setRefreshing(true);
      const token = localStorage.getItem("adminToken");
      const data = await api("/api/waitlist", {
        method: "GET",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (data.success) setWaitlist(data.data || []);
    } catch (err) {
      console.error("Waitlist fetch error:", err);
      setWaitlist([]);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    const fetchAll = async () => {
      setLoading(true);
      await Promise.all([fetchMessages(), fetchWaitlist()]);
      setLoading(false);
    };
    fetchAll();
  }, []);

  // Filtering
  const filteredMessages = useMemo(() => {
    if (!debouncedSearchTerm) return messages;
    return messages.filter(m => 
      m.email?.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
      m.fullName?.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
      m.message?.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    );
  }, [messages, debouncedSearchTerm]);

  const filteredWaitlist = useMemo(() => {
    if (!debouncedSearchTerm) return waitlist;
    return waitlist.filter(e => e.email?.toLowerCase().includes(debouncedSearchTerm.toLowerCase()));
  }, [waitlist, debouncedSearchTerm]);

  // Pagination
  const paginatedMessages = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredMessages.slice(start, start + itemsPerPage);
  }, [filteredMessages, currentPage]);

  const paginatedWaitlist = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredWaitlist.slice(start, start + itemsPerPage);
  }, [filteredWaitlist, currentPage]);

  const totalPages = activeTab === "messages" 
    ? Math.ceil(filteredMessages.length / itemsPerPage)
    : Math.ceil(filteredWaitlist.length / itemsPerPage);

  const stats = { 
    totalMessages: messages.length, 
    pendingMessages: messages.filter(m => m.status === "pending").length,
    totalWaitlist: waitlist.length,
    repliedMessages: messages.filter(m => m.status === "replied").length,
    readMessages: messages.filter(m => m.status === "read").length,
  };

  // Delete handlers
  const deleteMessage = async (id, email) => {
    const result = await Swal.fire({
      title: "Delete message?",
      html: `Delete message from <strong class="text-red-400">${email}</strong>?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      confirmButtonText: "Yes, delete",
      background: "#1f2937",
      color: "#fff",
    });
    if (!result.isConfirmed) return;
    
    setDeletingId(id);
    try {
      const token = localStorage.getItem("adminToken");
      await api(`/api/contact/${id}`, { method: "DELETE", headers: { Authorization: `Bearer ${token}` } });
      setMessages(prev => prev.filter(m => m._id !== id));
      Swal.fire({ title: "Deleted!", icon: "success", timer: 1500, showConfirmButton: false });
    } finally {
      setDeletingId(null);
    }
  };

  const deleteWaitlistEntry = async (id, email) => {
    const result = await Swal.fire({
      title: "Delete waitlist entry?",
      html: `Remove <strong class="text-red-400">${email}</strong> from waitlist?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      confirmButtonText: "Yes, delete",
      background: "#1f2937",
      color: "#fff",
    });
    if (!result.isConfirmed) return;
    
    setDeletingId(id);
    try {
      const token = localStorage.getItem("adminToken");
      await api(`/api/waitlist/${id}`, { method: "DELETE", headers: { Authorization: `Bearer ${token}` } });
      setWaitlist(prev => prev.filter(e => e._id !== id));
      Swal.fire({ title: "Deleted!", icon: "success", timer: 1500, showConfirmButton: false });
    } finally {
      setDeletingId(null);
    }
  };

  const handleViewMessage = (message) => {
    setSelectedMessage(message);
    if (message.status === "pending") {
      api(`/api/contact/${message._id}/status`, {
        method: "PUT",
        body: JSON.stringify({ status: "read" }),
        headers: { Authorization: `Bearer ${localStorage.getItem("adminToken")}` },
      }).catch(console.error);
      setMessages(prev => prev.map(m => m._id === message._id ? { ...m, status: "read" } : m));
    }
  };

  const handleStatusUpdate = (id, newStatus) => {
    setMessages(prev => prev.map(m => m._id === id ? { ...m, status: newStatus } : m));
  };

  const handleRefresh = () => {
    if (activeTab === "messages") fetchMessages(true);
    else fetchWaitlist(true);
    setCurrentPage(1);
    setSearchTerm("");
  };

  const handleLogout = async () => {
    const result = await Swal.fire({
      title: "Logout?",
      text: "Are you sure you want to logout?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, logout",
      background: "#1f2937",
      color: "#fff",
    });
    if (result.isConfirmed) {
      localStorage.removeItem("adminToken");
      localStorage.removeItem("adminUser");
      navigate("/admin/login");
    }
  };

  if (loading && !messages.length && !waitlist.length) {
    return (
      <>
        <Header user={user} onLogout={handleLogout} />
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 pt-20">
          <div className="container mx-auto px-4 py-8">
            <LoadingSkeleton />
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header user={user} onLogout={handleLogout} />
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 pt-20">
        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="mb-10">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl shadow-lg shadow-indigo-500/25">
                    <LayoutDashboard className="w-6 h-6 text-white" />
                  </div>
                  <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Admin Dashboard
                  </h1>
                </div>
                <p className="text-gray-400 ml-12">Manage contact messages and waitlist subscribers</p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={handleRefresh}
                  disabled={refreshing}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-200 disabled:opacity-50"
                >
                  <RefreshCw className={`w-4 h-4 ${refreshing ? "animate-spin" : ""}`} />
                  <span>Refresh</span>
                </button>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
            <ModernStatCard title="Total Messages" value={stats.totalMessages} icon={MessageSquare} color="indigo" trend="+12% this month" subtitle="All time" />
            <ModernStatCard title="Pending Replies" value={stats.pendingMessages} icon={Clock} color="amber" subtitle="Awaiting response" />
            <ModernStatCard title="Replied" value={stats.repliedMessages} icon={CheckCircle} color="emerald" subtitle="Completed" />
            <ModernStatCard title="Waitlist Signups" value={stats.totalWaitlist} icon={UserPlus} color="purple" trend={`${stats.totalWaitlist} subscribers`} subtitle="Early access" />
          </div>

          {/* Tabs */}
          <div className="flex gap-3 mb-6 border-b border-white/10 pb-2">
            <ModernTabButton
              active={activeTab === "messages"}
              onClick={() => { setActiveTab("messages"); setCurrentPage(1); setSearchTerm(""); }}
              icon={MessageSquare}
              label="Messages"
              count={messages.length}
            />
            <ModernTabButton
              active={activeTab === "waitlist"}
              onClick={() => { setActiveTab("waitlist"); setCurrentPage(1); setSearchTerm(""); }}
              icon={UserPlus}
              label="Waitlist"
              count={waitlist.length}
            />
          </div>

          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all text-white placeholder-gray-500"
                placeholder={activeTab === "messages" ? "Search by name, email or message..." : "Search by email..."}
                value={searchTerm}
                onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-4">
            {activeTab === "messages" ? (
              paginatedMessages.length === 0 ? (
                <EmptyState type="messages" hasSearch={!!searchTerm} onClearSearch={() => setSearchTerm("")} />
              ) : (
                paginatedMessages.map(message => (
                  <MessageCard
                    key={message._id}
                    message={message}
                    onDelete={deleteMessage}
                    onViewMessage={handleViewMessage}
                    isDeleting={deletingId === message._id}
                  />
                ))
              )
            ) : (
              paginatedWaitlist.length === 0 ? (
                <EmptyState type="waitlist" hasSearch={!!searchTerm} onClearSearch={() => setSearchTerm("")} />
              ) : (
                paginatedWaitlist.map(entry => (
                  <WaitlistCard
                    key={entry._id}
                    entry={entry}
                    onView={setSelectedWaitlistEntry}
                    onDelete={deleteWaitlistEntry}
                    isDeleting={deletingId === entry._id}
                  />
                ))
              )
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-6 border-t border-white/10">
              <div className="text-sm text-gray-400">
                Showing page <span className="text-white font-medium">{currentPage}</span> of{" "}
                <span className="text-white font-medium">{totalPages}</span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-500 disabled:opacity-50 transition-all duration-200 hover:bg-white/10"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="flex gap-1">
                  {[...Array(Math.min(5, totalPages))].map((_, i) => {
                    let pageNum = i + 1;
                    if (totalPages > 5 && currentPage > 3) {
                      pageNum = currentPage - 2 + i;
                      if (pageNum > totalPages) return null;
                    }
                    return (
                      <button
                        key={pageNum}
                        onClick={() => setCurrentPage(pageNum)}
                        className={`px-4 py-2 rounded-xl transition-all duration-200 ${
                          currentPage === pageNum
                            ? "bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/25"
                            : "bg-white/5 hover:bg-white/10 text-gray-400"
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                </div>
                <button
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-xl bg-white/5 border border-white/10 hover:border-indigo-500 disabled:opacity-50 transition-all duration-200 hover:bg-white/10"
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
      {selectedMessage && <MessageModal message={selectedMessage} onClose={() => setSelectedMessage(null)} onStatusUpdate={handleStatusUpdate} />}
      {selectedWaitlistEntry && <WaitlistModal entry={selectedWaitlistEntry} onClose={() => setSelectedWaitlistEntry(null)} />}
    </>
  );
}